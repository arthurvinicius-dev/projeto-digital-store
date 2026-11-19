import { useId } from 'react'
import Choice from '../Choice'
import styles from './FilterGroup.module.css'

export default function FilterGroup({
  title,
  inputType = 'checkbox',
  options,
  className = '',
}) {
  const name = useId()

  return (
    <fieldset className={`${styles.group} ${className}`.trim()}>
      <legend className={styles.title}>{title}</legend>
      {options.map((option) => (
        <Choice
          key={option.text}
          type={inputType}
          name={name}
          value={option.value ?? option.text}
          label={option.text}
        />
      ))}
    </fieldset>
  )
}
