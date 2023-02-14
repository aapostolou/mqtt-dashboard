export const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 4,

    '& > *': {
      aspectRatio: '1',

      p: 2,
    },
  },
}
