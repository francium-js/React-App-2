import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common'

export const BoardId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const boardId = request.headers['boardid']

    if (!boardId) {
      throw new BadRequestException('BoardId header is missing')
    }

    return boardId
  },
)
