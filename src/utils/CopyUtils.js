import { Notification } from '@arco-design/web-vue';
export const copyToClipboard = (text, msg) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    Notification.success(msg??'已复制喽！')
};