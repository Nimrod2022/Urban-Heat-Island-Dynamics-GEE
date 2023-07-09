# Load the ggplot2 library
library(ggplot2)

# Create a data frame with the area and mean class LST data
data <- data.frame(
  No. = c(1, 2, 3, 4),
  Class = c("Water", "GUI", "Built-up areas", "Bareground/shrubs"),
  `Area 2007` = c(54.4, 335.6, 178.6, 136.1),
  `Area 2014` = c(22.6, 399.9, 121.2, 161.2),
  `Area 2022` = c(15.5, 234.76, 139.33, 315.23),
  `LST 2007` = c(24, 32, 35, 43),
  `LST 2014` = c(35, 33, 45, 53),
  `LST 2022` = c(26, 26, 40, 42)
)

# Filter the data for the "Built-up areas" class
built_up_data <- data[data$Class == "Built-up areas", ]

# Calculate the average LST (Land Surface Temperature) for the "Built-up areas" class
average_lst <- colMeans(built_up_data[, c("LST 2007", "LST 2014", "LST 2022")])

# Filter the data for other classes (excluding "Built-up areas")
other_classes <- data[data$Class != "Built-up areas", ]

# Create a data frame for plotting with mean LST values for "Built-up areas" and other classes
plot_data <- rbind(
  data.frame(Class = "Built-up areas", Year = c("2007", "2014", "2022"), Mean_LST = average_lst),
  data.frame(Class = rep("Other classes", 3), Year = c("2007", "2014", "2022"), Mean_LST = colMeans(other_classes[, c("LST 2007", "LST 2014", "LST 2022")]))
)

# Create a bar plot using ggplot
bar_plot <- ggplot(plot_data, aes(x = Year, y = Mean_LST, fill = Class)) +
  geom_bar(stat = "identity", position = "dodge") +  # Add bars to the plot
  geom_text(aes(label = round(Mean_LST, 2)), position = position_dodge(width = 0.9), vjust = -0.5, color = "black", size = 3.5) +  # Add text labels to the bars
  labs(x = "Year", y = "Mean LST (°C)", fill = "Class", title = "Mean LST by Year and Class") +  # Set axis labels and plot title
  theme_minimal() +  # Set a minimal theme for the plot
  theme(plot.title = element_text(hjust = 0.5))  # Center the plot title

# Display the bar plot
bar_plot
