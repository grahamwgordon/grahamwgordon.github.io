var elt = document.getElementById('calculator');


var ops = {
  "expressions": false,
  "keypad": false,
  "settingsMenu": false,
  "zoomButtons": false,
  "lockViewport": true,
  "xAxisLabel": "Servings of cheese",
  "yAxisLabel": "Servings of meat",
};


var bds = {
  left: 1,
  right: 4,
  bottom: 0,
  top: 1,
};


var exps = [
  {
    type: "expression",
    id: "protein inequality",
    latex: "7 x + 11 y \\geq 20",
    color: Desmos.Colors.RED,
    lineOpacity: 0,
    fillOpacity: 0.2,
  },
  {
    type: "expression",
    id: "sodium inequality",
    latex: "170 x + 410 y \\leq 600",
    color: Desmos.Colors.BLUE,
    lineOpacity: 0,
    fillOpacity: 0.2,
  },
  {
    type: "expression",
    id: "specified point",
    latex: "p = (1.5, 0.5)",
    dragMode: Desmos.DragModes.XY,
    color: Desmos.Colors.PURPLE,
    showLabel: true,
    label: "Cost: \$$\{v\}"
  },
  {
    hidden: true,
    type: "expression",
    id: "cost function",
    latex: "f_{cost} (x,y) = 0.715 x + 2.897 y",
  },
  {
    hidden: true,
    type: "expression",
    id: "cost value",
    latex: "v = f_{cost} (p.x, p.y)",
  }
];


var calculator = Desmos.GraphingCalculator(elt, ops);
calculator.setMathBounds(bds);
calculator.setExpressions(exps);

//

