import $ from 'jquery';
import Handlebars from 'handlebars';
import { DCMViewer } from '../index';

/**
 * Renders study browser
 */
export default function renderStudyBrowser() {
    const imageThumbnailSource = $('#imageThumbnailTemplate').html();
    Handlebars.registerPartial('imageThumbnail', imageThumbnailSource);

    const source = $('#studyBrowserTemplate').html();
    const { studies } = DCMViewer.viewerbase.data;

    const template = Handlebars.compile(source);
    const html = template({
        studies,
    });

    $('#studyBrowser').html(html);
}
