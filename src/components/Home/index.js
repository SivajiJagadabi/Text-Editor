import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  TextEditorContainer,
  TextImgContainer,
  TextHeading,
  Image,
  EditorContainer,
  Button,
  EditButtons,
  TextArea,
  ListItem,
} from './styledComponents'

class Home extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const boldLogoColor = isBold ? `#faff00` : `#f1f5f9`
    const italicLogoColor = isItalic ? `#faff00` : `#f1f5f9`
    const underlineLogoColor = isUnderline ? `#faff00` : `#f1f5f9`

    return (
      <AppContainer>
        <TextEditorContainer>
          <TextImgContainer>
            <TextHeading>Text Editor</TextHeading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextImgContainer>
          <EditorContainer>
            <EditButtons>
              <ListItem>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  style={{color: `${boldLogoColor}`}}
                >
                  <VscBold style={{fontSize: 25}} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  style={{color: `${italicLogoColor}`}}
                >
                  <GoItalic style={{fontSize: 25}} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  style={{color: `${underlineLogoColor}`}}
                >
                  <AiOutlineUnderline style={{fontSize: 25}} />
                </Button>
              </ListItem>
            </EditButtons>
            <TextArea
              style={{
                fontWeight: `${isBold ? `bold` : `normal`}`,
                fontStyle: `${isItalic ? `italic` : `normal`}`,
                textDecoration: `${isUnderline ? `underline` : `normal`}`,
              }}
            />
          </EditorContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}

export default Home
