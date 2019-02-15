	/* Copyright JS */

	var SystemDate = new Date();
	var SystemDateByYear = SystemDate.getFullYear();

	var CopyrightTag = document.getElementById('Copyright');

	var CopyrightHead = "Copyright &copy ";
	var CopyrightYear = SystemDateByYear;
	var CopyrightName = "[公司名稱]";
	var CopyrightTail = "[公司類型], Inc. All Rights Reserved.";

	CopyrightTag.innerHTML = CopyrightHead + CopyrightYear + " " + CopyrightName + " " + CopyrightTail;