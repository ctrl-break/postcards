/* tslint:disable */
/* eslint-disable */
import { PartOfSpeech } from '../models/part-of-speech';
import { WordUsageDto } from '../models/word-usage-dto';
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
    usages?: Array<WordUsageDto>;
    word: string;
}
