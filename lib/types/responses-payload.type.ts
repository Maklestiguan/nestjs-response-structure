import { Type } from '@nestjs/common'
import { Field, ObjectType } from '@nestjs/graphql'
import { ResponseError } from '../interfaces/response-error.interface'
import { ResponsePayload } from '../interfaces/response-payload.interface'
import { ResponseErrorType } from './response-error.type'

export const ResponsesPayloadType = <T>(
    classRef: Type<T>,
): Type<ResponsePayload<T>> => {
    @ObjectType('ResponsesPayload', { isAbstract: true })
    class ResponsesPayloadType implements ResponsePayload<T> {
        @Field(() => [classRef], { nullable: true })
        data?: T[]

        @Field(() => ResponseErrorType, { nullable: true })
        error?: ResponseError
    }

    return ResponsesPayloadType
}