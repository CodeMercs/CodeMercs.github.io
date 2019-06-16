# install.packages("ggplot2")
# install.packages("hrbrthemes")
# install.packages("magick")

library(ggplot2)
library(hrbrthemes)
library(magick)


# Create a base graph, similar to what we had above
pic0 = ggplot(iris, aes(x = Petal.Width, y = Petal.Length, color = Species)) + 
  geom_point() +
  labs(title = 'Branding your ggplot Graphs',
       subtitle = 'Simple tweaks you can use to boost the impact of your graphs today',
       x = 'This axis title intentionally left blank',
       y = 'This axis title intentionally left blank',
       caption = 'Kan Test')

pic0


# Customize the graphs with your company's color palette
pic1 = pic0 + scale_color_manual(name = '',
                                 labels = c('Black', 'Red', 'Gray'),
                                 values = c('#000000', '#EC0108', '#ACAEAD')) +
  theme_ipsum() +
  theme(plot.title = element_text(color = "#EC0108"),
        plot.caption = element_text(color = "#EC0108", face = 'bold'))

pic1


# Add your company's logo to the graph you created
logo = image_read("github.png")
pic1
grid::grid.raster(logo, x = 0.07, y = 0.03, just = c('left', 'bottom'), width = unit(1, 'inches'))
