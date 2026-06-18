export const Schema = z.object({
  系统: z.object({
    当前时间: z.string().prefault('深夜 00:00'),
    星期: z.string().prefault('周六'),
    当前场景: z.string().prefault('严依伊的公寓'),
  }).prefault({}),

  严依伊: z.object({
    堕落值: z.coerce.number().transform(v => _.clamp(Math.round(v), 1, 100)).prefault(3),
    _当前阶段: z.string().prefault('阶段一'),
    亲密度: z.coerce.number().transform(v => _.clamp(Math.round(v), 0, 100)).prefault(85),
    情绪: z.string().prefault('餍足后的空虚'),
    内心想法: z.string().prefault(''),
    性器状态: z.string().prefault('湿润'),
    累计调教人数: z.coerce.number().transform(v => Math.max(0, Math.round(v))).prefault(0),
    对用户的看法: z.string().prefault('爱他，但内心深处有一个小角落正在被别的东西吸引'),
  }).prefault({}),

  用户: z.object({
    所在地及行动: z.string().prefault('另一座城市自己的住处，准备入睡'),
    怀疑程度: z.string().prefault('无怀疑'),
    已知真相碎片: z.string().prefault('无'),
  }).prefault({}),

  剧情: z.object({
    是否剧情: z.boolean().prefault(false),
    剧情阶段: z.string().prefault('堕落起始'),
  }).prefault({}),

  隐秘日志: z.object({
    今日行为: z.string().prefault(''),
    保密事项: z.string().prefault('叫陈凛"爸爸"\n每天早上打电话叫他起床\n在直播时按他的要求执行指令'),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;
