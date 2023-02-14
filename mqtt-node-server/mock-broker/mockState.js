exports.mockState = [
  { id: 0, topic: 'LIGHTS', variant: 'display', properties: {} },
  {
    id: 1,
    topic: 'LIGHTS',
    variant: 'button',
    properties: {
      value: '',
      label: 'Clear (default)',
    },
  },
  {
    id: 2,
    topic: 'LIGHTS',
    variant: 'button',
    properties: {
      value: 'ON',
      label: 'Open Lights (with color)',
      color: 'success',
    },
  },
  {
    id: 3,
    topic: 'LIGHTS',
    variant: 'button',
    properties: {
      value: 'OFF',
      label: 'Close Lights (with color)',
      color: 'error',
    },
  },
  {
    id: 4,
    topic: 'LIGHTS',
    variant: 'switch',
    properties: {
      value: ['ON', 'OFF'],
      label: 'Toggle Lights (default)',
    },
  },
  {
    id: 5,
    topic: 'LIGHTS',
    variant: 'switch',
    properties: {
      value: ['ON', 'OFF'],
      label: 'Toggle Lights (with colors)',
      color: { ON: 'success', OFF: 'error' },
    },
  },
  {
    id: 6,
    topic: 'LIGHTS',
    variant: 'switch',
    properties: {
      value: ['ON', 'OFF'],
      label: 'Toggle Lights (with falback color)',
      color: { ON: 'success', OFF: 'error', fallback: 'warning' },
    },
  },
  // { variant: 'thermometer' },
]
