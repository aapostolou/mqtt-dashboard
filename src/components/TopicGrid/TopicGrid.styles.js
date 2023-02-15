export const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: {
      sm: 'repeat(auto-fill, minmax(200px, 1fr))',
      xs: 'repeat(auto-fill, minmax(150px, 1fr))',
    },
    gap: {
      sm: 3,
      xs: 2,
    },

    '& > *': {
      aspectRatio: '1',

      p: 2,
    },
  },
}
