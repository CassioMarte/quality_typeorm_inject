import request from 'supertest'

describe('teste', ()=>{
  it('4 + 4', ()=>{
    const math = (a:number, b:number) =>{
      return  a + b
    }

    const res = math(2,2)

    expect(res).toBe(4)

  })
})

