import React from "react";

import { ResponsiveRadar } from '@nivo/radar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = () => (
    <ResponsiveRadar
        data={[
            {
              "taste": "fruity",
              "chardonay": 89,
              "carmenere": 60,
              "syrah": 56
            },
            {
              "taste": "bitter",
              "chardonay": 72,
              "carmenere": 104,
              "syrah": 62
            },
            {
              "taste": "heavy",
              "chardonay": 70,
              "carmenere": 88,
              "syrah": 103
            },
            {
              "taste": "strong",
              "chardonay": 113,
              "carmenere": 116,
              "syrah": 35
            },
            {
              "taste": "sunny",
              "chardonay": 93,
              "carmenere": 98,
              "syrah": 57
            }
          ]}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
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
)

export default MyResponsiveRadar