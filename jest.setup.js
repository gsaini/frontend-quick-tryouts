import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
import ResizeObserver from 'resize-observer-polyfill';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
global.ResizeObserver = ResizeObserver;