import React, {Component} from 'react'
import {
  Heading,
  Container,
  CustomInput,
  CustomLabel,
  GenerateButton,
  CustomOption,
  CustomSelect,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    backgroundImageUrl: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: '',
    isMemeGenerated: false, // Track whether meme is generated or not
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrl: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrl,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    // Update state with form values and set isMemeGenerated to true
    this.setState({
      isMemeGenerated: true,
    })
  }

  render() {
    const {
      activeFontSizeOptionId,
      backgroundImageUrl,
      topTextInput,
      bottomTextInput,
      isMemeGenerated,
    } = this.state

    return (
      <Container onSubmit={this.onGenerateMeme}>
        <Heading>Meme Generator</Heading>
        <CustomLabel htmlFor="image-url">Image URL</CustomLabel>
        <CustomInput
          id="image-url"
          type="input"
          value={backgroundImageUrl}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="top-text">Top Text</CustomLabel>
        <CustomInput
          id="top-text"
          type="input"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="bottom-text">Bottom Text</CustomLabel>
        <CustomInput
          id="bottom-text"
          type="input"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeId}
        >
          {fontSizesOptionsList.map(option => (
            <CustomOption key={option.optionId} value={option.optionId}>
              {option.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
        {/* Render MemeContainer and TextContent only if isMemeGenerated is true */}
        {isMemeGenerated && (
          <MemeContainer backgroundImage={backgroundImageUrl}>
            <TextContent activeFontSizeId={activeFontSizeOptionId}>
              {topTextInput}
            </TextContent>
            <TextContent activeFontSizeId={activeFontSizeOptionId}>
              {bottomTextInput}
            </TextContent>
          </MemeContainer>
        )}
      </Container>
    )
  }
}

export default MemeGenerator
