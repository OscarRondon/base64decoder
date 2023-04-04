export type Action = 'Encode' | 'Decode'

export interface stateApp {
  typeOfAction: Action
  textData: string
}

export type stateAppAction =
  | { type: 'SET_RADIO_BUTTON_ACTION', payload: Action }
  | { type: 'SET_TEXT_DATA', payload: string }
