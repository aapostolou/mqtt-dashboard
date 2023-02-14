export const topics = [
  {
    variant: 'button',
    properties: {
      topic: 'LIGHTS',
      value: 'ON',
      label: 'Open Lights',
      color: 'success',
    },
  },
  {
    variant: 'button',
    properties: {
      topic: 'LIGHTS',
      value: 'OFF',
      label: 'Close Lights',
      color: 'error',
    },
  },
  { variant: 'display', properties: { topic: 'LIGHT' } },
  // { variant: 'switch' },
  // { variant: 'thermometer' },
]
