import React, { useMemo, useState} from 'react';
import styles from './styles/TextSelector.module.css'
import TextSelectorButton from "@/UI/TextSelectorButton/TextSelectorButton";

const SelectorInput = React.memo(function SelectorInput({name, classNameFont, classNameWrapper, classNameOption, classNameOptionSelected, classNameInitialOption, classNameOptionContent, options, onChange, inputValue, ...props}) {
  // option template object
  // {id: 1, value: 'matte', text: 'Матовая'}

  const [choseOption, setChoseOption] = useState(() => {
    if (inputValue !== undefined) {
      return inputValue
    }
    if (options) {
      return options[0]
    }
    return {id: 1, value: 'matte', text: 'Матовая'}
  })
  const [isShowOptions, setIsShowOptions] = useState(false)

  const optionsElements = useMemo(() => {
    return options.map((mapOption) => {
      if (mapOption.id === choseOption.id) {
        return (
          <div
            key={mapOption.id}
            onClick={e => optionChoosing(mapOption, e)}
            className={classNameOption? classNameOption : [styles['selector-input__option'], classNameOptionSelected? classNameOptionSelected : styles['selector-input__option_selected'], classNameFont? classNameFont : styles['selector-font']].join(' ')}>
            {mapOption.text}
          </div>
        );
      }
      return (
        <div
          key={mapOption.id}
          onClick={e => optionChoosing(mapOption, e)}
          className={[classNameOption? classNameOption : styles['selector-input__option'], classNameFont? classNameFont : styles['selector-font']].join(' ')}>
          {mapOption.text}
        </div>
      );
    })
  }, [options, choseOption]);
  function showOptions(e) {
    setIsShowOptions(showed => !showed)
  }

  function handleFocusSelectorChecker(e) {
    e.preventDefault()
  }
  function optionChoosing(option, e) {
    e.stopPropagation()
    if (onChange && choseOption.id !== option.id) {
      onChange(option)
    }
    setChoseOption((prevOption) => {
      if (prevOption === option) {
        return prevOption
      }
      return option
    })
    setIsShowOptions((prevState) => {
      if (choseOption === option) {
        return prevState
      }
      return !prevState
    })
  }
  return (
    <div
      className={classNameWrapper? classNameWrapper : [styles['selector-input'], classNameFont ? classNameFont : styles['selector-font']].join(' ')}
      style={isShowOptions ? {borderColor: 'rgba(0, 0, 0, 0)'} : {}}
      onClick={showOptions}
      onMouseLeave={e => {
        if (isShowOptions) {
          showOptions(e)
        }
      }}
      {...props}>
      <input tabIndex='-1'
             className={styles['text-selector-input-checker']}
             name={name? name : 'text-selector-input-checker'}
             defaultValue={choseOption.value}
             onFocus={handleFocusSelectorChecker}/>
      <p
        className={[classNameInitialOption? classNameInitialOption : styles['selector-input__initial-option'], classNameFont ? classNameFont : styles['selector-font']].join(' ')}>{choseOption.text}</p>
      {isShowOptions
        ? <div className={classNameOptionContent? classNameOptionContent : [styles['selector-input__options-content']].join(' ')}>
            {optionsElements}
          </div>
        : false}
      <TextSelectorButton fill='#000000' style={isShowOptions ? {transform: "rotate(180deg)"} : {}}/>
    </div>
  );
});

export default SelectorInput;