// src/hooks.ts

import { createTypedHooks } from 'easy-peasy'; 
import GuestBookStore from '../interfaces/GuestBookStore'; 

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<GuestBookStore>();

// 👇 export the typed hooks
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;