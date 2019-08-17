class UserForm {
  email: string;
  name: string;
  age: number;

  constructor (data?: { email: string, name: string, age: number }) {
    this.email = (data && data.email) || ''
    this.name = (data && data.name) || ''
    this.age = (data && data.age) || 0
  }

  validateEmail (): Array<string> {
    let errors = []
    if (!this.email || this.email.length < 1) {
      errors.push('メールアドレスを入力してください。')
    }
    return errors
  }

  validateName (): Array<string> {
    let errors = []
    if (!this.name || this.name.length < 1) {
      errors.push('名前を入力してください。')
    }
    return errors
  }

  validateAge (): Array<string> {
    let errors = []
    if (this.age === undefined) {
      errors.push('年齢を入力してください。')
    } else if (this.age < 0) {
      errors.push('年齢は0以上の値を入力してください。')
    }
    return errors
  }
}

export default UserForm
