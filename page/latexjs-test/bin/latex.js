#!/usr/bin/env node
var ref$, createHTMLWindow, config, util, path, fs, stdin, program, beautifyHtml, he, parse, HtmlGenerator, en, de, info, addStyle, that, macros, CustomMacros, options, readFile, input, dir, css, fonts, js, slice$ = [].slice, arrayFrom$ = Array.from || function(x){return slice$.call(x);};
ref$ = require('svgdom'), createHTMLWindow = ref$.createHTMLWindow, config = ref$.config;
global.window = createHTMLWindow();
global.document = window.document;
util = require('util');
path = require('path');
fs = require('fs-extra');
stdin = require('stdin');
program = require('commander');
beautifyHtml = require('js-beautify').html;
ref$ = require('../dist/latex.js'), he = ref$.he, parse = ref$.parse, HtmlGenerator = ref$.HtmlGenerator;
en = require('hyphenation.en-us');
de = require('hyphenation.de');
info = require('../package.json');
he.encode.options.strict = true;
he.encode.options.useNamedReferences = true;
addStyle = function(url, styles){
  if (!styles) {
    return [url];
  } else {
    return arrayFrom$(styles).concat([url]);
  }
};
program.name(info.name).version(info.version).description(info.description).usage('[options] [files...]').option('-o, --output <file>', 'specify output file, otherwise STDOUT will be used').option('-a, --assets [dir]', 'copy CSS and fonts to the directory of the output file, unless dir is given (default: no assets are copied)').option('-u, --url <base URL>', 'set the base URL to use for the assets (default: use relative URLs)').option('-b, --body', 'don\'t include HTML boilerplate and CSS, only output the contents of body').option('-e, --entities', 'encode HTML entities in the output instead of using UTF-8 characters').option('-p, --pretty', 'beautify the html (this may add/remove spaces unintentionally)').option('-c, --class <class>', 'set a default documentclass for documents without a preamble', 'article').option('-m, --macros <file>', 'load a JavaScript file with additional custom macros').option('-s, --stylesheet <url>', 'specify an additional style sheet to use (can be repeated)', addStyle).option('-n, --no-hyphenation', 'don\'t insert soft hyphens (disables automatic hyphenation in the browser)').option('-l, --language <lang>', 'set hyphenation language', 'en').on('--help', function(){
  return console.log('\nIf no input files are given, STDIN is read.');
}).parse(process.argv);
if (that = program.macros) {
  macros = path.resolve(process.cwd(), that);
  CustomMacros = require(macros);
  if (that = CustomMacros['default']) {
    CustomMacros = that;
  } else {
    CustomMacros = CustomMacros[path.parse(macros).name];
  }
}
if (program.body && (program.stylesheet || program.url)) {
  console.error("error: conflicting options: 'url' and 'stylesheet' cannot be used with 'body'!");
  process.exit(1);
}
options = {
  hyphenate: program.hyphenation,
  languagePatterns: (function(){
    switch (that = program.language) {
    case 'en':
      return en;
    case 'de':
      return de;
    default:
      console.error("error: language '" + that + "' is not supported yet");
      return process.exit(1);
    }
  }()),
  documentClass: program['class'],
  CustomMacros: CustomMacros,
  styles: program.style || []
};
readFile = util.promisify(fs.readFile);
if (program.args.length) {
  input = Promise.all(program.args.map(function(file){
    return readFile(file);
  }));
} else {
  input = new Promise(function(resolve, reject){
    stdin(function(str){
      resolve(str);
    });
  });
}
input.then(function(text){
  var generator, div, html;
  if (text.join) {
    text = text.join("\n\n");
  }
  generator = parse(text, {
    generator: new HtmlGenerator(options)
  });
  if (program.body) {
    div = document.createElement('div');
    div.appendChild(generator.domFragment().cloneNode(true));
    html = div.innerHTML;
  } else {
    html = generator.htmlDocument(program.url).documentElement.outerHTML;
  }
  if (program.entities) {
    html = he.encode(html, {
      'allowUnsafeSymbols': true
    });
  }
  if (program.pretty) {
    html = beautifyHtml(html, {
      'end_with_newline': true,
      'wrap_line_length': 120,
      'wrap_attributes': 'auto',
      'unformatted': ['span']
    });
  }
  if (program.output) {
    return fs.writeFileSync(program.output, html);
  } else {
    return process.stdout.write(html + '\n');
  }
})['catch'](function(err){
  console.error(err.toString());
  return process.exit(1);
});
dir = program.assets;
if (program.assets === true) {
  if (!program.output) {
    console.error("assets error: either a directory has to be given, or -o");
    process.exit(1);
  } else {
    dir = path.posix.dirname(path.resolve(program.output));
  }
} else if (fs.existsSync(dir) && !fs.statSync(dir).isDirectory()) {
  console.error("assets error: the given path exists but is not a directory: ", dir);
  process.exit(1);
}
if (dir) {
  css = path.join(dir, 'css');
  fonts = path.join(dir, 'fonts');
  js = path.join(dir, 'js');
  fs.mkdirpSync(css);
  fs.mkdirpSync(fonts);
  fs.mkdirpSync(js);
  fs.copySync(path.join(__dirname, '../dist/css'), css);
  fs.copySync(path.join(__dirname, '../dist/fonts'), fonts);
  fs.copySync(path.join(__dirname, '../dist/js'), js);
  fs.copySync(path.join(__dirname, '../node_modules/katex/dist/fonts/'), fonts, function(src){
    return /\.woff$/.exec(src) || fs.statSync(src).isDirectory();
  });
}
//# sourceMappingURL=data:application/json;base64,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R0FBaUQsT0FBTyxRQUFBLENBQUEsR0FBQTtXQUFnQixTQUFILENBQUEsSUFBQSxDQUFKLEdBQUksQ0FBYSxDQUFBLEVBQUEsQ0FBRyxFQUFFLENBQUMsUUFBTixDQUFlLEdBQUQsQ0FBSyxDQUFDLFdBQXBCLENBQStCO0dBQTVIIiwiZmlsZSI6ImNsaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImBgIyEvdXNyL2Jpbi9lbnYgbm9kZWBgXG5cbiMgb24gdGhlIHNlcnZlciB3ZSBuZWVkIHRvIGluY2x1ZGUgYSBET00gaW1wbGVtZW50YXRpb24gLSBCRUZPUkUgcmVxdWlyaW5nIEh0bWxHZW5lcmF0b3IgYmVsb3dcbnJlcXVpcmUhICdzdmdkb20nOiB7IGNyZWF0ZUhUTUxXaW5kb3csIGNvbmZpZyB9XG5cbmdsb2JhbC53aW5kb3cgPSBjcmVhdGVIVE1MV2luZG93IVxuZ2xvYmFsLmRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG5cbnJlcXVpcmUhIHtcbiAgICB1dGlsXG4gICAgcGF0aFxuICAgICdmcy1leHRyYSc6IGZzXG4gICAgc3RkaW5cbiAgICBjb21tYW5kZXI6IHByb2dyYW1cbiAgICAnanMtYmVhdXRpZnknOiB7IGh0bWw6IGJlYXV0aWZ5LWh0bWwgfVxuXG4gICAgJy4uL2Rpc3QvbGF0ZXguanMnOiB7IGhlLCBwYXJzZSwgSHRtbEdlbmVyYXRvciB9XG5cbiAgICAnaHlwaGVuYXRpb24uZW4tdXMnOiBlblxuICAgICdoeXBoZW5hdGlvbi5kZSc6ICAgIGRlXG5cbiAgICAnLi4vcGFja2FnZS5qc29uJzogaW5mb1xufVxuXG5oZS5lbmNvZGUub3B0aW9ucy5zdHJpY3QgPSB0cnVlXG5oZS5lbmNvZGUub3B0aW9ucy51c2VOYW1lZFJlZmVyZW5jZXMgPSB0cnVlXG5cbmFkZFN0eWxlID0gKHVybCwgc3R5bGVzKSAtPlxuICAgIGlmIG5vdCBzdHlsZXNcbiAgICAgICAgW3VybF1cbiAgICBlbHNlXG4gICAgICAgIFsuLi5zdHlsZXMsIHVybF1cblxuXG5wcm9ncmFtXG4gICAgLm5hbWUgICAgICAgICAgIGluZm8ubmFtZVxuICAgIC52ZXJzaW9uICAgICAgICBpbmZvLnZlcnNpb25cbiAgICAuZGVzY3JpcHRpb24gICAgaW5mby5kZXNjcmlwdGlvblxuXG4gICAgLnVzYWdlICdbb3B0aW9uc10gW2ZpbGVzLi4uXSdcblxuXG4gICAgLm9wdGlvbiAnLW8sIC0tb3V0cHV0IDxmaWxlPicsICAgICAgJ3NwZWNpZnkgb3V0cHV0IGZpbGUsIG90aGVyd2lzZSBTVERPVVQgd2lsbCBiZSB1c2VkJ1xuICAgIC5vcHRpb24gJy1hLCAtLWFzc2V0cyBbZGlyXScsICAgICAgICdjb3B5IENTUyBhbmQgZm9udHMgdG8gdGhlIGRpcmVjdG9yeSBvZiB0aGUgb3V0cHV0IGZpbGUsIHVubGVzcyBkaXIgaXMgZ2l2ZW4gKGRlZmF1bHQ6IG5vIGFzc2V0cyBhcmUgY29waWVkKSdcbiAgICAub3B0aW9uICctdSwgLS11cmwgPGJhc2UgVVJMPicsICAgICAnc2V0IHRoZSBiYXNlIFVSTCB0byB1c2UgZm9yIHRoZSBhc3NldHMgKGRlZmF1bHQ6IHVzZSByZWxhdGl2ZSBVUkxzKSdcblxuICAgICMgb3B0aW9ucyBhZmZlY3RpbmcgdGhlIEhUTUwgb3V0cHV0XG4gICAgLm9wdGlvbiAnLWIsIC0tYm9keScsICAgICAgICAgICAgICAgJ2RvblxcJ3QgaW5jbHVkZSBIVE1MIGJvaWxlcnBsYXRlIGFuZCBDU1MsIG9ubHkgb3V0cHV0IHRoZSBjb250ZW50cyBvZiBib2R5J1xuICAgIC5vcHRpb24gJy1lLCAtLWVudGl0aWVzJywgICAgICAgICAgICdlbmNvZGUgSFRNTCBlbnRpdGllcyBpbiB0aGUgb3V0cHV0IGluc3RlYWQgb2YgdXNpbmcgVVRGLTggY2hhcmFjdGVycydcbiAgICAub3B0aW9uICctcCwgLS1wcmV0dHknLCAgICAgICAgICAgICAnYmVhdXRpZnkgdGhlIGh0bWwgKHRoaXMgbWF5IGFkZC9yZW1vdmUgc3BhY2VzIHVuaW50ZW50aW9uYWxseSknXG5cbiAgICAjIG9wdGlvbnMgYWJvdXQgTGFUZVggYW5kIHN0eWxlXG4gICAgLm9wdGlvbiAnLWMsIC0tY2xhc3MgPGNsYXNzPicsICAgICAgJ3NldCBhIGRlZmF1bHQgZG9jdW1lbnRjbGFzcyBmb3IgZG9jdW1lbnRzIHdpdGhvdXQgYSBwcmVhbWJsZScsICdhcnRpY2xlJ1xuICAgIC5vcHRpb24gJy1tLCAtLW1hY3JvcyA8ZmlsZT4nLCAgICAgICdsb2FkIGEgSmF2YVNjcmlwdCBmaWxlIHdpdGggYWRkaXRpb25hbCBjdXN0b20gbWFjcm9zJ1xuICAgIC5vcHRpb24gJy1zLCAtLXN0eWxlc2hlZXQgPHVybD4nLCAgICdzcGVjaWZ5IGFuIGFkZGl0aW9uYWwgc3R5bGUgc2hlZXQgdG8gdXNlIChjYW4gYmUgcmVwZWF0ZWQpJywgYWRkU3R5bGVcblxuICAgIC5vcHRpb24gJy1uLCAtLW5vLWh5cGhlbmF0aW9uJywgICAgICdkb25cXCd0IGluc2VydCBzb2Z0IGh5cGhlbnMgKGRpc2FibGVzIGF1dG9tYXRpYyBoeXBoZW5hdGlvbiBpbiB0aGUgYnJvd3NlciknXG4gICAgLm9wdGlvbiAnLWwsIC0tbGFuZ3VhZ2UgPGxhbmc+JywgICAgJ3NldCBoeXBoZW5hdGlvbiBsYW5ndWFnZScsICdlbidcblxuXG4gICAgLm9uICctLWhlbHAnLCAtPiBjb25zb2xlLmxvZyAnXFxuSWYgbm8gaW5wdXQgZmlsZXMgYXJlIGdpdmVuLCBTVERJTiBpcyByZWFkLidcblxuICAgIC5wYXJzZSBwcm9jZXNzLmFyZ3ZcblxuXG5cbmlmIHByb2dyYW0ubWFjcm9zXG4gICAgbWFjcm9zID0gcGF0aC5yZXNvbHZlIHByb2Nlc3MuY3dkISwgdGhhdFxuICAgIEN1c3RvbU1hY3JvcyA9IChyZXF1aXJlIG1hY3JvcylcbiAgICBpZiBDdXN0b21NYWNyb3MuZGVmYXVsdFxuICAgICAgICAjIGNsYXNzIGlzIHRoZSBkZWZhdWx0IGV4cG9ydFxuICAgICAgICBDdXN0b21NYWNyb3MgPSB0aGF0XG4gICAgZWxzZVxuICAgICAgICAjIGNsYXNzIGlzIGEgbmFtZWQgZXhwb3J0XG4gICAgICAgIEN1c3RvbU1hY3JvcyA9IEN1c3RvbU1hY3Jvc1twYXRoLnBhcnNlIG1hY3JvcyAubmFtZV1cblxuXG5pZiBwcm9ncmFtLmJvZHkgYW5kIChwcm9ncmFtLnN0eWxlc2hlZXQgb3IgcHJvZ3JhbS51cmwpXG4gICAgY29uc29sZS5lcnJvciBcImVycm9yOiBjb25mbGljdGluZyBvcHRpb25zOiAndXJsJyBhbmQgJ3N0eWxlc2hlZXQnIGNhbm5vdCBiZSB1c2VkIHdpdGggJ2JvZHknIVwiXG4gICAgcHJvY2Vzcy5leGl0IDFcblxuXG5jb25zdCBvcHRpb25zID1cbiAgICBoeXBoZW5hdGU6ICAgICAgICAgIHByb2dyYW0uaHlwaGVuYXRpb25cbiAgICBsYW5ndWFnZVBhdHRlcm5zOiAgIHN3aXRjaCBwcm9ncmFtLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICdlbicgPT4gZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgJ2RlJyA9PiBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgfCBvdGhlcndpc2UgY29uc29sZS5lcnJvciBcImVycm9yOiBsYW5ndWFnZSAnI3t0aGF0fScgaXMgbm90IHN1cHBvcnRlZCB5ZXRcIjsgcHJvY2Vzcy5leGl0IDFcbiAgICBkb2N1bWVudENsYXNzOiAgICAgIHByb2dyYW0uY2xhc3NcbiAgICBDdXN0b21NYWNyb3M6ICAgICAgIEN1c3RvbU1hY3Jvc1xuICAgIHN0eWxlczogICAgICAgICAgICAgcHJvZ3JhbS5zdHlsZSB8fCBbXVxuXG5cblxuXG5cbmNvbnN0IHJlYWRGaWxlID0gdXRpbC5wcm9taXNpZnkoZnMucmVhZEZpbGUpXG5cbmlmIHByb2dyYW0uYXJncy5sZW5ndGhcbiAgICBpbnB1dCA9IFByb21pc2UuYWxsIHByb2dyYW0uYXJncy5tYXAgKGZpbGUpIC0+IHJlYWRGaWxlIGZpbGVcbmVsc2VcbiAgICBpbnB1dCA9IG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpICEtPiBzdGRpbiAoc3RyKSAhLT4gcmVzb2x2ZSBzdHJcblxuXG5pbnB1dC50aGVuICh0ZXh0KSAtPlxuICAgIGlmIHRleHQuam9pblxuICAgICAgICB0ZXh0ID0gdGV4dC5qb2luIFwiXFxuXFxuXCJcblxuICAgIGdlbmVyYXRvciA9IHBhcnNlIHRleHQsIHsgZ2VuZXJhdG9yOiBuZXcgSHRtbEdlbmVyYXRvcihvcHRpb25zKSB9XG5cbiAgICBpZiBwcm9ncmFtLmJvZHlcbiAgICAgICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAnZGl2J1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQgZ2VuZXJhdG9yLmRvbUZyYWdtZW50IS5jbG9uZU5vZGUgdHJ1ZVxuICAgICAgICBodG1sID0gZGl2LmlubmVySFRNTFxuICAgIGVsc2VcbiAgICAgICAgaHRtbCA9IGdlbmVyYXRvci5odG1sRG9jdW1lbnQocHJvZ3JhbS51cmwpLmRvY3VtZW50RWxlbWVudC5vdXRlckhUTUxcblxuICAgIGlmIHByb2dyYW0uZW50aXRpZXNcbiAgICAgICAgaHRtbCA9IGhlLmVuY29kZSBodG1sLCAnYWxsb3dVbnNhZmVTeW1ib2xzJzogdHJ1ZVxuXG4gICAgaWYgcHJvZ3JhbS5wcmV0dHlcbiAgICAgICAgaHRtbCA9IGJlYXV0aWZ5LWh0bWwgaHRtbCxcbiAgICAgICAgICAgICdlbmRfd2l0aF9uZXdsaW5lJzogdHJ1ZVxuICAgICAgICAgICAgJ3dyYXBfbGluZV9sZW5ndGgnOiAxMjBcbiAgICAgICAgICAgICd3cmFwX2F0dHJpYnV0ZXMnIDogJ2F1dG8nXG4gICAgICAgICAgICAndW5mb3JtYXR0ZWQnOiBbJ3NwYW4nXVxuXG4gICAgaWYgcHJvZ3JhbS5vdXRwdXRcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyBwcm9ncmFtLm91dHB1dCwgaHRtbFxuICAgIGVsc2VcbiAgICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUgaHRtbCArICdcXG4nXG4uY2F0Y2ggKGVycikgLT5cbiAgICBjb25zb2xlLmVycm9yIGVyci50b1N0cmluZyFcbiAgICBwcm9jZXNzLmV4aXQgMVxuXG5cbiMgYXNzZXRzXG5kaXIgPSBwcm9ncmFtLmFzc2V0c1xuXG5pZiBwcm9ncmFtLmFzc2V0cyA9PSB0cnVlXG4gICAgaWYgbm90IHByb2dyYW0ub3V0cHV0XG4gICAgICAgIGNvbnNvbGUuZXJyb3IgXCJhc3NldHMgZXJyb3I6IGVpdGhlciBhIGRpcmVjdG9yeSBoYXMgdG8gYmUgZ2l2ZW4sIG9yIC1vXCJcbiAgICAgICAgcHJvY2Vzcy5leGl0IDFcbiAgICBlbHNlXG4gICAgICAgIGRpciA9IHBhdGgucG9zaXguZGlybmFtZSBwYXRoLnJlc29sdmUgcHJvZ3JhbS5vdXRwdXRcbmVsc2UgaWYgZnMuZXhpc3RzU3luYyhkaXIpIGFuZCBub3QgZnMuc3RhdFN5bmMoZGlyKS5pc0RpcmVjdG9yeSFcbiAgICBjb25zb2xlLmVycm9yIFwiYXNzZXRzIGVycm9yOiB0aGUgZ2l2ZW4gcGF0aCBleGlzdHMgYnV0IGlzIG5vdCBhIGRpcmVjdG9yeTogXCIsIGRpclxuICAgIHByb2Nlc3MuZXhpdCAxXG5cbmlmIGRpclxuICAgIGNzcyA9IHBhdGguam9pbiBkaXIsICdjc3MnXG4gICAgZm9udHMgPSBwYXRoLmpvaW4gZGlyLCAnZm9udHMnXG4gICAganMgPSBwYXRoLmpvaW4gZGlyLCAnanMnXG5cbiAgICBmcy5ta2RpcnBTeW5jIGNzc1xuICAgIGZzLm1rZGlycFN5bmMgZm9udHNcbiAgICBmcy5ta2RpcnBTeW5jIGpzXG5cbiAgICBmcy5jb3B5U3luYyAocGF0aC5qb2luIF9fZGlybmFtZSwgJy4uL2Rpc3QvY3NzJyksIGNzc1xuICAgIGZzLmNvcHlTeW5jIChwYXRoLmpvaW4gX19kaXJuYW1lLCAnLi4vZGlzdC9mb250cycpLCBmb250c1xuICAgIGZzLmNvcHlTeW5jIChwYXRoLmpvaW4gX19kaXJuYW1lLCAnLi4vZGlzdC9qcycpLCBqc1xuICAgIGZzLmNvcHlTeW5jIChwYXRoLmpvaW4gX19kaXJuYW1lLCAnLi4vbm9kZV9tb2R1bGVzL2thdGV4L2Rpc3QvZm9udHMvJyksIGZvbnRzLCAoc3JjKSAtPiBzcmMgPT0gL1xcLndvZmYkLyBvciBmcy5zdGF0U3luYyhzcmMpLmlzRGlyZWN0b3J5IVxuIl19