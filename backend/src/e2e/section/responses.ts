import { GetSectionIdResponseDto } from 'src/modules/section/dtos/get-id.dto'

const responses = {
  get: (
    data: GetSectionIdResponseDto[],
    sectionId: string,
  ): GetSectionIdResponseDto => {
    return data.find(item => item.id === sectionId)
  },
}

export default responses
