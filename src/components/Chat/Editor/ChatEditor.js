import React, { PureComponent } from 'react';
import '@draft-js-plugins/emoji/lib/plugin.css';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils, SelectionState } from 'draft-js';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import createEmojiPlugin, { defaultTheme } from '@draft-js-plugins/emoji';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import { stateToHTML } from 'draft-js-export-html';
import { Button } from 'reactstrap';

defaultTheme.emojiSelect = `${defaultTheme.emojiSelect} emoji-block`;
defaultTheme.emojiSelectButton = `${defaultTheme.emojiSelectButton} emoji-button`;
defaultTheme.emojiSelectButtonPressed = `${defaultTheme.emojiSelectButtonPressed} emoji-button`;
defaultTheme.emojiSelectPopover = `${defaultTheme.emojiSelectPopover} emoji-list`;

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
  theme: defaultTheme,
  positionSuggestions: () => ({
    left: '10px',
    bottom: '35px',
    display: 'block',
    transform: 'scale(1) translateY(0)',
    transformOrigin: '1em 0% 0px',
    transition: 'all 0.25s cubic-bezier(0.3, 1.2, 0.2, 1)'
  })
});


const linkifyPlugin = createLinkifyPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin, linkifyPlugin];

class ChatEditor extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      _editorState: EditorState.createEmpty(),
      _isOpenEmoji: false
    };
  }

  onChangeEditor = (editorState) => {
    const { _editorState } = this.state;
    const selection = editorState.getSelection();
    const activeBlock = editorState.getCurrentContent().getBlockForKey(selection.anchorKey);

    if (_editorState.getCurrentContent() !== editorState.getCurrentContent()) {
      if (!selection.hasFocus && editorState.getCurrentContent().hasText()) {
        const newSelection = new SelectionState({
          anchorKey: selection.anchorKey,
          anchorOffset: activeBlock.getCharacterList().size,
          focusKey: selection.focusKey,
          focusOffset: activeBlock.getCharacterList().size,
          hasFocus: true,
          isBackward: false
        });
        editorState = EditorState.forceSelection(editorState, newSelection);
      }
    }

    this.setState({
      _editorState: editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  onOpenEmojiTrigger = value => () => {
    this.setState({ _isOpenEmoji: value });
  }

  sendMessage = () => {
    const { _editorState } = this.state;
    const { sendMessage } = this.props;
    const message = stateToHTML(_editorState.getCurrentContent());
    sendMessage(message);
    return this.onChangeEditor(EditorState.createEmpty());
  }

  handleReturn = (e) => {
    const { _editorState, _isOpenEmoji } = this.state;
    if (isSoftNewlineEvent(e)) {
      const newState = RichUtils.insertSoftNewline(_editorState);
      this.onChangeEditor(newState);
      return 'not-handled';
    } if (!e.altKey && !e.metaKey && !e.ctrlKey) {
      if (_isOpenEmoji) return 'not-handled';
      this.sendMessage();
      return 'handled';
    }
    return 'not-handled';
  }

  handleKeyCommand = (command) => {
    const { _editorState } = this.state;
    let newState;

    if (command === 'bold') {
      newState = RichUtils.toggleInlineStyle(_editorState, 'BOLD');
    }
    else if (command === 'italic') {
      newState = RichUtils.toggleInlineStyle(_editorState, 'ITALIC');
    }
    else if (command === 'underline') {
      newState = RichUtils.toggleInlineStyle(_editorState, 'UNDERLINE');
    }
    if (newState) {
      this.onChangeEditor(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  render () {
    const { _editorState } = this.state;
    return (
      <div className="editor-block">
        <div className="d-flex justify-content-center align-items-end mt-2">
          <div
            className="w-75 d-flex justify-content-between align-items-center position-relative border rounded"
            onClick={this.focus}
          >
            <Editor
              editorState={_editorState}
              onChange={this.onChangeEditor}
              handleKeyCommand={this.handleKeyCommand}
              handleReturn={this.handleReturn}
              plugins={plugins}
              ref={(element) => {
                this.editor = element;
              }}
            />
            <EmojiSuggestions
              onOpen={this.onOpenEmojiTrigger(true)}
              onClose={this.onOpenEmojiTrigger(false)}
            />
            <EmojiSelect />
          </div>
          <Button
            className="ml-2 px-4 font-weight-semi-bold send-button"
            size="sm"
            color="primary"
            type="button"
            outline
            onClick={this.sendMessage}
          >Send message
          </Button>
        </div>
      </div>
    );
  }
}

ChatEditor.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};

export default ChatEditor;
