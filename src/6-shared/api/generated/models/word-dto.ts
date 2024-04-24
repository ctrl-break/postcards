/* tslint:disable */
/* eslint-disable */
import { PartOfSpeech } from '../models/part-of-speech';
export interface WordDto {
    context?: string;
    defaultImageId?: number;
    id: number;
    isVisible: boolean;
    meaning?: string;
    pos?: PartOfSpeech;
    transcription?: string;
    translateVariants: {
        [key: string]: any;
    };
    translation: string;
    word: string;
}
