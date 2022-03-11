import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { CircleProps, Color, StopProps } from 'react-native-svg';
import type { IconProps } from '../../../icons/utils/base';
export declare const DEFAULT_STATUS_ICON_SIZE = 16;
export declare const Colors: {
    accent_blue: string;
    accent_green: string;
    accent_red: string;
    bg_gradient_end: string;
    bg_gradient_start: string;
    black: string;
    blue_alice: string;
    border: string;
    grey: string;
    grey_gainsboro: string;
    grey_whisper: string;
    icon_background: string;
    modal_shadow: string;
    overlay: string;
    overlay_dark: string;
    shadow_icon: string;
    targetedMessageBackground: string;
    transparent: string;
    white: string;
    white_smoke: string;
    white_snow: string;
};
export declare type MarkdownStyle = Partial<{
    autolink: TextStyle;
    blockQuoteBar: ViewStyle;
    blockQuoteSection: ViewStyle;
    blockQuoteSectionBar: ViewStyle;
    blockQuoteText: TextStyle | ViewStyle;
    br: TextStyle;
    codeBlock: TextStyle;
    del: TextStyle;
    em: TextStyle;
    heading: TextStyle;
    heading1: TextStyle;
    heading2: TextStyle;
    heading3: TextStyle;
    heading4: TextStyle;
    heading5: TextStyle;
    heading6: TextStyle;
    hr: ViewStyle;
    image: ImageStyle;
    inlineCode: TextStyle;
    list: ViewStyle;
    listItem: ViewStyle;
    listItemBullet: TextStyle;
    listItemNumber: TextStyle;
    listItemText: TextStyle;
    listRow: ViewStyle;
    mailTo: TextStyle;
    mentions: TextStyle;
    newline: TextStyle;
    noMargin: TextStyle;
    paragraph: TextStyle;
    paragraphCenter: TextStyle;
    paragraphWithImage: ViewStyle;
    strong: TextStyle;
    sublist: ViewStyle;
    table: ViewStyle;
    tableHeader: ViewStyle;
    tableHeaderCell: TextStyle;
    tableRow: ViewStyle;
    tableRowCell: ViewStyle;
    tableRowLast: ViewStyle;
    text: TextStyle;
    u: TextStyle;
    view: ViewStyle;
}>;
export declare type Theme = {
    attachmentPicker: {
        bottomSheetContentContainer: ViewStyle;
        errorButtonText: TextStyle;
        errorContainer: ViewStyle;
        errorText: TextStyle;
        image: ViewStyle;
        imageOverlay: ViewStyle;
        imageOverlaySelectedComponent: {
            check: ViewStyle;
        };
    };
    attachmentSelectionBar: {
        container: ViewStyle;
        icon: ViewStyle;
    };
    avatar: {
        BASE_AVATAR_SIZE: number;
        container: ViewStyle;
        image: ImageStyle;
        presenceIndicator: CircleProps;
        presenceIndicatorContainer: ViewStyle;
    };
    channel: {
        selectChannel: TextStyle;
    };
    channelListFooterLoadingIndicator: {
        container: ViewStyle;
    };
    channelListHeaderErrorIndicator: {
        container: ViewStyle;
        errorText: TextStyle;
    };
    channelListLoadingIndicator: {
        container: ViewStyle;
    };
    channelListMessenger: {
        flatList: ViewStyle;
        flatListContent: ViewStyle;
    };
    channelListSkeleton: {
        animationTime: number;
        background: ViewStyle;
        container: ViewStyle;
        gradientStart: StopProps;
        gradientStop: StopProps;
        height: number;
        maskFillColor?: Color;
    };
    channelPreview: {
        checkAllIcon: IconProps;
        checkIcon: IconProps;
        container: ViewStyle;
        contentContainer: ViewStyle;
        date: TextStyle;
        message: TextStyle & {
            fontWeight: TextStyle['fontWeight'];
        };
        row: ViewStyle;
        title: TextStyle;
        unreadContainer: ViewStyle;
        unreadText: TextStyle;
    };
    colors: typeof Colors & {
        [key: string]: string;
    };
    dateHeader: {
        container: ViewStyle;
        text: TextStyle;
    };
    emptyStateIndicator: {
        channelContainer: ViewStyle;
        channelDetails: TextStyle;
        channelTitle: TextStyle;
    };
    groupAvatar: {
        container: ViewStyle;
        image: ImageStyle;
    };
    iconBadge: {
        icon: ViewStyle;
        iconInner: ViewStyle;
        unreadCount: TextStyle;
    };
    iconSquare: {
        container: ViewStyle;
        image: ImageStyle;
    };
    imageGallery: {
        blurType: 'light' | 'dark';
        footer: {
            centerContainer: ViewStyle;
            container: ViewStyle;
            imageCountText: TextStyle;
            innerContainer: ViewStyle;
            leftContainer: ViewStyle;
            rightContainer: ViewStyle;
        };
        grid: {
            contentContainer: ViewStyle;
            gridAvatar: ImageStyle;
            gridAvatarWrapper: ViewStyle;
            gridImage: ViewStyle;
            handle: ViewStyle;
            handleText: TextStyle;
            overlay: ViewStyle;
        };
        header: {
            centerContainer: ViewStyle;
            container: ViewStyle;
            dateText: TextStyle;
            innerContainer: ViewStyle;
            leftContainer: ViewStyle;
            rightContainer: ViewStyle;
            usernameText: TextStyle;
        };
        backgroundColor?: string;
    };
    inlineDateSeparator: {
        container: ViewStyle;
        text: TextStyle;
    };
    loadingDots: {
        container: ViewStyle;
        loadingDot: ViewStyle;
        spacing: number;
    };
    loadingErrorIndicator: {
        container: ViewStyle;
        errorText: TextStyle;
        retryText: TextStyle;
    };
    loadingIndicator: {
        container: ViewStyle;
        loadingText: TextStyle;
    };
    messageInput: {
        attachButton: ViewStyle;
        attachButtonContainer: ViewStyle;
        attachmentSelectionBar: ViewStyle;
        autoCompleteInputContainer: ViewStyle;
        commandsButton: ViewStyle;
        commandsButtonContainer: ViewStyle;
        composerContainer: ViewStyle;
        container: ViewStyle;
        editingBoxContainer: ViewStyle;
        editingBoxHeader: ViewStyle;
        editingBoxHeaderTitle: TextStyle;
        fileUploadPreview: {
            dismiss: ViewStyle;
            fileContainer: ViewStyle;
            fileContentContainer: ViewStyle;
            filenameText: TextStyle;
            fileSizeText: TextStyle;
            fileTextContainer: ViewStyle;
            flatList: ViewStyle;
        };
        giphyContainer: ViewStyle;
        giphyText: TextStyle;
        imageUploadPreview: {
            dismiss: ViewStyle;
            flatList: ViewStyle;
            itemContainer: ViewStyle;
            upload: ImageStyle;
        };
        inputBox: TextStyle;
        inputBoxContainer: ViewStyle;
        moreOptionsButton: ViewStyle;
        optionsContainer: ViewStyle;
        replyContainer: ViewStyle;
        sendButton: ViewStyle;
        sendButtonContainer: ViewStyle;
        showThreadMessageInChannelButton: {
            check: IconProps;
            checkBoxActive: ViewStyle;
            checkBoxInactive: ViewStyle;
            container: ViewStyle;
            innerContainer: ViewStyle;
            text: TextStyle;
        };
        suggestions: {
            command: {
                args: TextStyle;
                container: ViewStyle;
                iconContainer: ViewStyle;
                title: TextStyle;
            };
            commandsHeader: {
                container: ViewStyle;
                title: TextStyle;
            };
            container: ViewStyle & {
                maxHeight: number;
            };
            emoji: {
                container: ViewStyle;
                text: TextStyle;
            };
            emojisHeader: {
                container: ViewStyle;
                title: TextStyle;
            };
            item: ViewStyle;
            mention: {
                avatarSize: number;
                column: ViewStyle;
                container: ViewStyle;
                name: TextStyle;
                tag: TextStyle;
            };
        };
        suggestionsListContainer: ViewStyle;
        uploadProgressIndicator: {
            container: ViewStyle;
            overlay: ViewStyle;
        };
    };
    messageList: {
        container: ViewStyle;
        contentContainer: ViewStyle;
        errorNotification: ViewStyle;
        errorNotificationText: TextStyle;
        inlineUnreadIndicator: {
            container: ViewStyle;
            text: TextStyle;
        };
        listContainer: ViewStyle;
        messageSystem: {
            container: ViewStyle;
            dateText: TextStyle;
            line: ViewStyle;
            text: TextStyle;
            textContainer: ViewStyle;
        };
        scrollToBottomButton: {
            container: ViewStyle;
            touchable: ViewStyle;
            unreadCountNotificationContainer: ViewStyle;
            unreadCountNotificationText: TextStyle;
            wrapper: ViewStyle;
        };
        typingIndicatorContainer: ViewStyle;
    };
    messageSimple: {
        actions: {
            button: ViewStyle & {
                defaultBackgroundColor?: ViewStyle['backgroundColor'];
                defaultBorderColor?: ViewStyle['borderColor'];
                primaryBackgroundColor?: ViewStyle['backgroundColor'];
                primaryBorderColor?: ViewStyle['borderColor'];
            };
            buttonText: TextStyle & {
                defaultColor?: TextStyle['color'];
                primaryColor?: TextStyle['color'];
            };
            container: ViewStyle;
        };
        avatarWrapper: {
            container: ViewStyle;
            leftAlign: ViewStyle;
            rightAlign: ViewStyle;
            spacer: ViewStyle;
        };
        card: {
            authorName: TextStyle;
            authorNameContainer: ViewStyle;
            authorNameFooter: TextStyle;
            authorNameFooterContainer: ViewStyle;
            authorNameMask: ViewStyle;
            container: ViewStyle;
            cover: ImageStyle;
            footer: ViewStyle & {
                description: TextStyle;
                title: TextStyle;
            };
            noURI: ViewStyle;
        };
        container: ViewStyle;
        content: {
            container: ViewStyle & {
                borderRadiusL: ViewStyle['borderBottomLeftRadius' | 'borderTopLeftRadius'];
                borderRadiusS: ViewStyle['borderBottomRightRadius' | 'borderTopRightRadius'];
            };
            containerInner: ViewStyle;
            deletedContainer: ViewStyle;
            deletedContainerInner: ViewStyle;
            deletedMetaText: TextStyle;
            deletedText: MarkdownStyle;
            errorContainer: ViewStyle;
            errorIcon: IconProps;
            errorIconContainer: ViewStyle;
            eyeIcon: IconProps;
            /**
             * Available options for styling text:
             * https://github.com/andangrd/react-native-markdown-package/blob/master/styles.js
             */
            markdown: MarkdownStyle;
            messageUser: TextStyle;
            metaContainer: ViewStyle;
            metaText: TextStyle;
            replyBorder: ViewStyle;
            replyContainer: ViewStyle;
            textContainer: ViewStyle & {
                onlyEmojiMarkdown: MarkdownStyle;
            };
            wrapper: ViewStyle;
        };
        file: {
            container: ViewStyle;
            details: ViewStyle;
            fileSize: TextStyle;
            icon: IconProps;
            title: TextStyle;
        };
        fileAttachmentGroup: {
            container: ViewStyle;
        };
        gallery: {
            galleryContainer: ViewStyle;
            galleryItemColumn: ViewStyle;
            halfSize: ViewStyle['height'];
            image: ImageStyle;
            imageContainer: ViewStyle;
            moreImagesContainer: ViewStyle;
            moreImagesText: TextStyle;
            size: ViewStyle['height'];
            width: ViewStyle['width'];
        };
        giphy: {
            cancel: TextStyle;
            cancelContainer: ViewStyle;
            container: ViewStyle;
            giphy: ImageStyle;
            giphyContainer: ViewStyle;
            giphyMask: ViewStyle;
            giphyText: TextStyle;
            selectionContainer: ViewStyle;
            selector: ViewStyle;
            send: TextStyle;
            sendContainer: ViewStyle;
            shuffleButton: ViewStyle;
            title: TextStyle;
        };
        reactionList: {
            container: ViewStyle;
            middleIcon: ViewStyle;
            radius: number;
            reactionBubble: ViewStyle;
            reactionBubbleBackground: ViewStyle;
            reactionSize: number;
            strokeSize: number;
        };
        replies: {
            avatar: ViewStyle;
            avatarContainerMultiple: ViewStyle;
            avatarContainerSingle: ViewStyle;
            container: ViewStyle;
            leftAvatarsContainer: ViewStyle;
            leftCurve: ViewStyle;
            messageRepliesText: TextStyle;
            rightAvatarsContainer: ViewStyle;
            rightCurve: ViewStyle;
            avatarSize?: number;
        };
        status: {
            checkAllIcon: IconProps;
            checkIcon: IconProps;
            readByCount: TextStyle;
            statusContainer: ViewStyle;
            timeIcon: IconProps;
        };
        targetedMessageUnderlay: ViewStyle;
    };
    overlay: {
        padding: number;
        reactions: {
            avatarContainer: ViewStyle;
            avatarName: TextStyle;
            avatarSize: number;
            container: ViewStyle;
            flatListContainer: ViewStyle;
            radius: number;
            reactionBubble: ViewStyle;
            reactionBubbleBackground: ViewStyle;
            title: TextStyle;
        };
        reactionsList: {
            radius: number;
            reaction: ViewStyle;
            reactionList: ViewStyle;
            reactionSize: number;
        };
    };
    reply: {
        container: ViewStyle;
        fileAttachmentContainer: ViewStyle;
        imageAttachment: ImageStyle;
        markdownStyles: MarkdownStyle;
        messageContainer: ViewStyle;
        textContainer: ViewStyle;
    };
    screenPadding: number;
    spinner: ViewStyle;
    thread: {
        newThread: ViewStyle & {
            text: TextStyle;
            backgroundGradientStart?: string;
            backgroundGradientStop?: string;
        };
    };
    typingIndicator: {
        container: ViewStyle;
        text: TextStyle & {
            fontSize: TextStyle['fontSize'];
        };
    };
};
export declare const defaultTheme: Theme;
