var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attachment = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _AttachmentActions = require("../../components/Attachment/AttachmentActions");

var _Card = require("../../components/Attachment/Card");

var _Gallery = require("../../components/Attachment/Gallery");

var _Giphy = require("../../components/Attachment/Giphy");

var _FileAttachment = require("../../components/Attachment/FileAttachment");

var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");

var _this = this,
    _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Attachment.tsx";

var AttachmentWithContext = function AttachmentWithContext(props) {
  var _attachment$actions;

  var attachment = props.attachment,
      AttachmentActions = props.AttachmentActions,
      Card = props.Card,
      FileAttachment = props.FileAttachment,
      Gallery = props.Gallery,
      Giphy = props.Giphy,
      UrlPreview = props.UrlPreview;
  var hasAttachmentActions = !!((_attachment$actions = attachment.actions) != null && _attachment$actions.length);

  if (attachment.type === 'giphy' || attachment.type === 'imgur') {
    return _react["default"].createElement(Giphy, {
      attachment: attachment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 12
      }
    });
  }

  if ((attachment.title_link || attachment.og_scrape_url) && (attachment.image_url || attachment.thumb_url)) {
    return _react["default"].createElement(UrlPreview, (0, _extends2["default"])({}, attachment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }
    }));
  }

  if (attachment.type === 'image') {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Gallery, {
      images: [attachment],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }), hasAttachmentActions && _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
      key: "key-actions-" + attachment.id
    }, attachment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    })));
  }

  if (attachment.type === 'file' || attachment.type === 'audio') {
    return _react["default"].createElement(FileAttachment, {
      attachment: attachment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 12
      }
    });
  }

  if (attachment.type === 'video' && attachment.asset_url) {
    return _react["default"].createElement(FileAttachment, {
      attachment: attachment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }
    });
  }

  if (hasAttachmentActions) {
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Card, (0, _extends2["default"])({}, attachment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    })), _react["default"].createElement(AttachmentActions, (0, _extends2["default"])({
      key: "key-actions-" + attachment.id
    }, attachment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    })));
  } else {
    return _react["default"].createElement(Card, (0, _extends2["default"])({}, attachment, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 12
      }
    }));
  }
};

var areEqual = function areEqual(prevProps, nextProps) {
  var _prevAttachment$actio, _nextAttachment$actio;

  var prevAttachment = prevProps.attachment;
  var nextAttachment = nextProps.attachment;
  var attachmentEqual = ((_prevAttachment$actio = prevAttachment.actions) == null ? void 0 : _prevAttachment$actio.length) === ((_nextAttachment$actio = nextAttachment.actions) == null ? void 0 : _nextAttachment$actio.length) && prevAttachment.image_url === nextAttachment.image_url && prevAttachment.thumb_url === nextAttachment.thumb_url;
  return attachmentEqual;
};

var MemoizedAttachment = _react["default"].memo(AttachmentWithContext, areEqual);

var Attachment = function Attachment(props) {
  var attachment = props.attachment,
      PropAttachmentActions = props.AttachmentActions,
      PropCard = props.Card,
      PropFileAttachment = props.FileAttachment,
      PropGallery = props.Gallery,
      PropGiphy = props.Giphy,
      PropUrlPreview = props.UrlPreview;

  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
      ContextAttachmentActions = _useMessagesContext.AttachmentActions,
      ContextCard = _useMessagesContext.Card,
      ContextFileAttachment = _useMessagesContext.FileAttachment,
      ContextGallery = _useMessagesContext.Gallery,
      ContextGiphy = _useMessagesContext.Giphy,
      ContextUrlPreview = _useMessagesContext.UrlPreview;

  if (!attachment) {
    return null;
  }

  var AttachmentActions = PropAttachmentActions || ContextAttachmentActions || _AttachmentActions.AttachmentActions;
  var Card = PropCard || ContextCard || _Card.Card;
  var FileAttachment = PropFileAttachment || ContextFileAttachment || _FileAttachment.FileAttachment;
  var Gallery = PropGallery || ContextGallery || _Gallery.Gallery;
  var Giphy = PropGiphy || ContextGiphy || _Giphy.Giphy;
  var UrlPreview = PropUrlPreview || ContextUrlPreview || _Card.Card;
  return _react["default"].createElement(MemoizedAttachment, {
    attachment: attachment,
    AttachmentActions: AttachmentActions,
    Card: Card,
    FileAttachment: FileAttachment,
    Gallery: Gallery,
    Giphy: Giphy,
    UrlPreview: UrlPreview,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  });
};

exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map