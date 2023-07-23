import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #25262c;
`

export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 90vh;
  background-color: black;
`

export const TextImgContainer = styled.div`
  width: 43%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 70%;
  margin-top: 30px;
  height: 450px;
`

export const TextHeading = styled.h1`
  font-size: 24px;

  color: #f8fafc;
`

export const EditorContainer = styled.div`
  background-color: #25262c;
  width: 45%;
  height: 80vh;

  border-radius: 10px;
  border: 1px solid #f1f5f9;
`
export const EditButtons = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  list-style-type: none;
  height: 45px;
  margin-bottom: 0px;
  padding-left: 0px;
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin-left: 25px;
  margin-top: 5px;
`

export const TextArea = styled.textarea`
  height: 88%;
  background-color: transparent;
  width: 100%;
  color: white;
  padding-left: 25px;
  line-height: 1.5;
  padding-top: 15px;
  font-size: 16px;
`
export const ListItem = styled.li`
  font-family: 'Roboto';
`

// VscBold, GoItalic and AiOutlineUnderline
