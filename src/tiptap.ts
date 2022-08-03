import type { JSONContent } from '@tiptap/core'
import { generateJSON } from '@tiptap/html'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

export const parseTiptapHtml = (html: string | null): JSONContent =>
  generateJSON(html ?? '', [Document, Paragraph, Text])
