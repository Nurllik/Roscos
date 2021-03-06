import React, { PureComponent } from 'react';
import {PieChart, Pie, Sector, ResponsiveContainer, Cell} from 'recharts';

const data = [
  { name: 'Байконур', value: 400 },
  { name: 'Восточный', value: 300 },
  { name: 'Плецеск', value: 300 },
  { name: 'ГКЦ (Куру)', value: 200 },
];
const Pads = {
  1: 'Байконур',
  2: 'Восточный',
  3: 'Плесецк',
  4: 'ГКЦ (Куру)',
}
const colorPads = {
  1: '#0fa2a9',
  2: '#949217',
  3: '#c1a7b0',
  4: '#7d3865',
}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Запуски ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`( ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    let countPads = 4
    let count
    let dataPads = []
    while (countPads > 0) {
      let value = 0
      count = 0

      while (count < this.props.launches.length) {
        if (Pads[countPads] === Pads[this.props.launches[count].launch_pad.id]) {
          value++
        }
        count++
      }

      dataPads.push({
        name: Pads[countPads],
        value: value,
        color: colorPads[countPads]
      })
      console.log(dataPads);
      countPads--
    }

    return (
      <div className='title3'>
        <h1 style={{color: "white", textAlign: "center"}}>Запуски совершенные с космодромов</h1>
        <ResponsiveContainer  width={500} height={400}>
          <PieChart width="100%" height={300}>
            <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={dataPads}
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
            >
              {dataPads.map((entry, index) =>
                  <Cell key={index} fill={entry.color}/>
              )}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="colors">
          {Object.values(colorPads).map((item, index) => {
            console.log(item);
            return (<div className="colors__item">
              <div className="colors__color" style={{ backgroundColor: `${item}`}} />
              <div className="colors__text">{Object.values(Pads)[index]}</div>
            </div>)
          })}
        </div>
      </div>
    );
  }
}
