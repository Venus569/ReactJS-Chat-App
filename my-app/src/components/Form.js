import React from 'react'

export const Form = () => {
  return (
    <div class="container">
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div class="form-group">
          <label for="password">password</label>
          <input type="password" id="password" name="password" />
        </div>

        <div><a href="./forget-password">Forget password</a></div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
