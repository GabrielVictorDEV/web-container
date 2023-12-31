import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import './styles/placeholder.css'

import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'

import { EditorBlock } from './plugins/EditorBlock'
import { TrailingNode } from './plugins/TrailingNode'

export function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'prose prose-invert focus:outline-none',
      },
    },
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Digite ``` para acessar o editor'
          }

          if (node.type.name === 'editorBlock') {
            return ''
          }

          return "Type '/' to see commands..."
        },
      }),
      EditorBlock,
      TrailingNode,
    ],
    content: ``,
  })

  return <EditorContent editor={editor} />
}
