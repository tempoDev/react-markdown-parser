import { useState } from 'react'
import { marked } from 'marked'
import './App.css'

/*a header (H1 size), 
a sub header (H2 size), 
a link, 
inline code,
 a code block, 
 a list item, 
 a blockquote, 
 an image, 
 and bolded text*/
const INIT_TEXT = `# Cabecera 1
## Cabecera 2 

[Tempo's GitHub](https://github.com/tempoDev) 

**JAVASCRIPT**
\`javascript\`
\`\`\` 
console.log("hello world")
\`\`\`
![Image](https://www.freecodecamp.org/espanol/static/wide-image-3cb329e8b3cae865be76746fbd069cd2.png)

- List 1
- List 2
- List 3

> My last blockquote in this exercise
`

function App() {
  const [inputText, setInputText] = useState(INIT_TEXT)
  
  const updateInput = (text) => {
    setInputText(text)
  }

  marked.setOptions({
    breaks: true
  })

  return (
    <>
      <div className='container'>

        <div className="input_text">
        <div className="input_header">
          # MARKDOWN EDITOR
        </div>
        <textarea name="inputText" id="editor" rows="10" cols="50" onChange={ (e) => updateInput(e.target.value)} >{INIT_TEXT}</textarea>
        </div>

        <div className="preview_container">
        <div className="preview_header">
          HTML PREVIEW
        </div>
          <div className="preview" id='preview'
          dangerouslySetInnerHTML={{ __html: marked(inputText), }} >
        </div>
        </div>
      </div>
    </>
  )
}

export default App
