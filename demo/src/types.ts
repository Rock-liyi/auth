﻿import * as auth from '@localfirst/auth'
import { ConnectionManager } from 'ConnectionManager'

export type UserName = string
export type ConnectionStatus = string

export type PeerState = {
  userName: UserName
  user?: auth.UserWithSecrets
  device: auth.DeviceWithSecrets
  team?: auth.Team
  teamState?: auth.TeamState
  connectionManager?: ConnectionManager
  online: boolean
  connectionStatus: Record<UserName, ConnectionStatus>
  alerts: AlertInfo[]
}

export type StoredPeerState = {
  userName: UserName
  user?: auth.UserWithSecrets
  device: auth.DeviceWithSecrets
  teamChain?: string
}

export type Storage = Record<string, StoredPeerState>

export type TeamContextPayload =
  | [PeerState, React.Dispatch<React.SetStateAction<PeerState>>]
  | undefined

export interface AlertInfo {
  id: string
  message: string
  type: 'error' | 'warning' | 'info'
}
