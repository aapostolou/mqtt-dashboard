export const styles = {
  button: {
    position: 'absolute',

    top: 0,
    right: 0,

    opacity: 0.7,

    transition: 'all 0.3s ease',

    zIndex: 100,
  },

  actions: {
    py: 2,
    px: { sm: 3, xs: 2 },

    justifyContent: 'space-evenly',

    '& > *': {
      flex: 1,
    },
  },
}
