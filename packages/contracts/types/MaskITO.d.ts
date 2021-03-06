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

export class MaskITO extends Contract {
    constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
    clone(): MaskITO
    methods: {
        check_availability(id: string | number[]): TransactionObject<{
            exchange_addrs: string[]
            remaining: string
            started: boolean
            expired: boolean
            swapped: string
            exchanged_tokens: string[]
            0: string[]
            1: string
            2: boolean
            3: boolean
            4: string
            5: string[]
        }>

        check_claimable(): TransactionObject<string>

        claim(): TransactionObject<string>

        contract_creator(): TransactionObject<string>

        destruct(id: string | number[]): TransactionObject<void>

        fill_pool(
            _hash: string | number[],
            _start: number | string,
            _end: number | string,
            name: string,
            message: string,
            _exchange_addrs: string[],
            _ratios: (number | string)[],
            _token_addr: string,
            _total_tokens: number | string,
            _limit: number | string,
            _qualification: string,
        ): TransactionObject<void>

        getUnlockTime(): TransactionObject<string>

        setAdmin(future_admin: string): TransactionObject<void>

        setUnlockTime(_unlock_time: number | string): TransactionObject<void>

        set_bb_address(bb: string): TransactionObject<void>

        swap(
            id: string | number[],
            verification: string | number[],
            verification2: string | number[],
            validation: string | number[],
            exchange_addr_i: number | string,
            input_total: number | string,
        ): TransactionObject<string>

        withdraw(id: string | number[], addr_i: number | string): TransactionObject<void>

        withdrawBatchCreator(addrs: string[]): TransactionObject<void>

        withdrawCreator(addr: string): TransactionObject<void>
    }
    events: {
        ClaimSuccess: ContractEvent<{
            claimer: string
            timestamp: string
            to_value: string
            0: string
            1: string
            2: string
        }>
        DestructSuccess: ContractEvent<{
            id: string
            token_address: string
            remaining_balance: string
            exchanged_values: string[]
            0: string
            1: string
            2: string
            3: string[]
        }>
        FillSuccess: ContractEvent<{
            total: string
            id: string
            creator: string
            creation_time: string
            token_address: string
            name: string
            message: string
            0: string
            1: string
            2: string
            3: string
            4: string
            5: string
            6: string
        }>
        SwapSuccess: ContractEvent<{
            id: string
            swapper: string
            from_address: string
            to_address: string
            from_value: string
            to_value: string
            0: string
            1: string
            2: string
            3: string
            4: string
            5: string
        }>
        WithdrawSuccess: ContractEvent<{
            id: string
            token_address: string
            withdraw_balance: string
            0: string
            1: string
            2: string
        }>
        allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
    }
}
