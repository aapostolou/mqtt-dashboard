exports.mockState = [
  {
    id: 1,
    topic: 'LIGHTS',
    variant: 'button',
    properties: {
      value: 'ON',
      label: 'Open Lights',
      color: 'success',
    },
  },
  { id: 2, topic: 'LIGHTS', variant: 'display', message: 'ON', properties: {} },
  {
    id: 3,
    topic: 'LIGHTS',
    variant: 'button',
    properties: {
      value: 'OFF',
      label: 'Close Lights',
      color: 'error',
    },
  },
  {
    id: 4,
    topic: 'TEMPERATURE',
    variant: 'button',
    properties: {
      value: -5,
      label: 'Change Temperature to -10℃',
    },
  },
  {
    id: 5,
    topic: 'TEMPERATURE',
    variant: 'thermometer',
    message: '20',
    properties: {
      color: 'green',
    },
  },
  {
    id: 6,
    topic: 'TEMPERATURE',
    variant: 'button',
    properties: {
      value: 30,
      label: 'Change Temperature to 30℃',
      color: 'error',
    },
  },
]
