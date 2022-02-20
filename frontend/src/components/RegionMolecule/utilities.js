export const strongEffect = "#F44336";
export const minimialEffect = "#4CAF50";
export const mediumEffect = "#FFF9C4";
export const parentColor = "#C5CAE9";
export const nodeSize = 5;

export const colorMapping = {
  aq_index: 'red',
  deforestation_index: 'yellow',
  industry_density_index: 'green',
  literacy_rate_index: 'blue',
  population_index: 'purple',
  traffic_congession_index: 'cyan'
}

export const transformValToColor = (node) => {
  return colorMapping[node.id]
};
export const transformValToSize = (node) => {
  if(node.isRoot){
    return (5 * nodeSize * node.val);
  }
  return (nodeSize * node.val);
  // return nodeSize;
};
export const generateLabelFromName = (node) => {
  return node.id.split(" ").join("\n");
};