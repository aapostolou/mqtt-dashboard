import { useProperty } from './useProperty'

export const useTopicProps = ({ message, label, color, ...rest }) => {
  const newColor = useProperty({ message, property: color })
  const newLabel = useProperty({ message, property: label })

  return { message, label: newLabel, color: newColor, ...rest }
}
