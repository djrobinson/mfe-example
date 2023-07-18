import React from 'react';
import { ResponsiveChord } from '@nivo/chord';

const data = [
	[450, 115, 250, 201, 178],
	[7, 447, 252, 318, 742],
	[947, 50, 1503, 135, 588],
	[436, 421, 146, 96, 1649],
	[879, 876, 300, 288, 340]
];

const DannysOldComponent = () => (
	<div
		style={{
			width: '500px',
			height: '500px',
			border: 'solid 5px lightgray',
			borderRadius: '10px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}
	>
		<h2>Ayyyy what's up, Engineering!</h2>
	</div>
);

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const DannysComponent = () => (
	<div style={{ width: '500px', height: '500px' }}>
		<ResponsiveChord
			data={data}
			keys={['Western Hub', 'Eastern Hub', 'AEP Gen Hub', 'Chicago Hub', 'New Jersey Hub']}
			margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
			valueFormat=".2f"
			padAngle={0.02}
			innerRadiusRatio={0.96}
			innerRadiusOffset={0.02}
			inactiveArcOpacity={0.25}
			arcBorderColor={{
				from: 'color',
				modifiers: [['darker', 0.6]]
			}}
			activeRibbonOpacity={0.75}
			inactiveRibbonOpacity={0.25}
			ribbonBorderColor={{
				from: 'color',
				modifiers: [['darker', 0.6]]
			}}
			labelRotation={-90}
			labelTextColor={{
				from: 'color',
				modifiers: [['darker', 1]]
			}}
			colors={{ scheme: 'nivo' }}
			motionConfig="stiff"
			legends={[
				{
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 70,
					itemWidth: 80,
					itemHeight: 14,
					itemsSpacing: 0,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					symbolSize: 12,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000'
							}
						}
					]
				}
			]}
		/>
	</div>
);

// export default DannysOldComponent;
export default DannysComponent;
