interface IVbNameParams {
  vbname: string;
}

export const load = ({ params }: {params: IVbNameParams}) => {
  return {
    voiceBankName: params.vbname
  }
}