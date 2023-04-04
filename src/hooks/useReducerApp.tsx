import { useReducer } from 'react'
import { type Action, type stateApp, type stateAppAction } from '../model/types.d'

const initialState: stateApp = {
  typeOfAction: 'Encode',
  textData: ''
}

const reducerApp = (state: stateApp, action: stateAppAction): stateApp => {
  const { type } = action

  switch (type) {
    case 'SET_RADIO_BUTTON_ACTION':{
      return {
        ...state,
        typeOfAction: action.payload
      }
    }
    case 'SET_TEXT_DATA':{
      return {
        ...state,
        textData: action.payload
      }
    }
  }
  return state
}

export const useReducerApp = () => {
  const [{
    typeOfAction,
    textData
  }, dispatch] = useReducer(reducerApp, initialState)

  const setTypeOfAction = (payload: Action): void => {
    dispatch({ type: 'SET_RADIO_BUTTON_ACTION', payload })
  }

  const setTextData = (payload: string): void => {
    dispatch({ type: 'SET_TEXT_DATA', payload })
  }

  return {
    typeOfAction,
    textData,
    setTypeOfAction,
    setTextData
  }
}
