import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const PlayerId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.cookies?.player_id;
  },
);
