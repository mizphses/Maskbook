/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
    filter?: object
    fromBlock?: BlockType
    topics?: string[]
}

export class BalanceChecker extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
    clone(): BalanceChecker
    methods: {
        tokenBalance(user: string, token: string): TransactionObject<string>

        balances(users: string[], tokens: string[]): TransactionObject<string[]>
    }
    events: {
        allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
    }
}
