import { useEffect, useState } from 'react'
import './App.css'

const COUNTRY_OPTIONS = ['Argentina', 'Chile', 'Colombia', 'México', 'Perú', 'España']
const LANGUAGE_OPTIONS = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby']
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function App() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [edad, setEdad] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [experiencia, setExperiencia] = useState(5)
  const [aceptaTerminos, setAceptaTerminos] = useState(false)
  const [lenguajes, setLenguajes] = useState([])
  const [modalidad, setModalidad] = useState('presencial')
  const [pais, setPais] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [foto, setFoto] = useState(null)
  const [colorFavorito, setColorFavorito] = useState('#000000')
  const [resumen, setResumen] = useState(null)
  const [fotoPreview, setFotoPreview] = useState(null)

  useEffect(() => {
    if (!foto) {
      setFotoPreview(null)
      return
    }

    const url = URL.createObjectURL(foto)
    setFotoPreview(url)

    return () => {
      URL.revokeObjectURL(url)
    }
  }, [foto])

  const emailValido = EMAIL_REGEX.test(email)
  const edadValida = edad === '' || Number(edad) > 0
  const puedeEnviar = aceptaTerminos && emailValido && edadValida

  const handleLenguajeChange = (event) => {
    const value = event.target.value
    setLenguajes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    )
  }

  const handleFotoChange = (event) => {
    const file = event.target.files?.[0] ?? null
    setFoto(file)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setResumen({
      nombre,
      email,
      password,
      edad: edad === '' ? '' : Number(edad),
      fechaNacimiento,
      experiencia,
      aceptaTerminos,
      lenguajes,
      modalidad,
      pais,
      comentarios,
      colorFavorito,
      foto: foto?.name || 'No se agregó foto'
    })
  }

  return (
    <main className="app">
      <h1>Registro de estudiante</h1>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {!emailValido && email.length > 0 ? (
            <p className="error">Ingresa un correo con formato válido.</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="edad">Edad</label>
          <input
            id="edad"
            type="number"
            min="1"
            value={edad}
            onChange={(event) => setEdad(event.target.value)}
          />
          {!edadValida ? (
            <p className="error">La edad debe ser mayor a 0.</p>
          ) : null}
        </div>

        <div className="field">
          <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
          <input
            id="fechaNacimiento"
            type="date"
            value={fechaNacimiento}
            onChange={(event) => setFechaNacimiento(event.target.value)}
          />
        </div>

        <div className="field slider-field">
          <label htmlFor="experiencia">
            Nivel de experiencia: <span>{experiencia}</span>
          </label>
          <input
            id="experiencia"
            type="range"
            min="1"
            max="10"
            value={experiencia}
            onChange={(event) => setExperiencia(Number(event.target.value))}
          />
        </div>

        <div className="field checkbox-field">
          <label>
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={(event) => setAceptaTerminos(event.target.checked)}
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <fieldset className="fieldset">
          <legend>Lenguajes que conoces</legend>
          <div className="checkbox-group">
            {LANGUAGE_OPTIONS.map((lenguaje) => (
              <label key={lenguaje} className="checkbox-inline">
                <input
                  type="checkbox"
                  value={lenguaje}
                  checked={lenguajes.includes(lenguaje)}
                  onChange={handleLenguajeChange}
                />
                {lenguaje}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Modalidad</legend>
          <div className="radio-group">
            <label className="radio-inline">
              <input
                type="radio"
                name="modalidad"
                value="presencial"
                checked={modalidad === 'presencial'}
                onChange={(event) => setModalidad(event.target.value)}
              />
              Presencial
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="modalidad"
                value="virtual"
                checked={modalidad === 'virtual'}
                onChange={(event) => setModalidad(event.target.value)}
              />
              Virtual
            </label>
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="pais">País</label>
          <select
            id="pais"
            value={pais}
            onChange={(event) => setPais(event.target.value)}
          >
            <option value="">Selecciona un país</option>
            {COUNTRY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            rows="4"
            value={comentarios}
            onChange={(event) => setComentarios(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="foto">Foto de perfil</label>
          <input id="foto" type="file" accept="image/*" onChange={handleFotoChange} />
        </div>

        <div className="field color-field">
          <label htmlFor="colorFavorito">Color favorito</label>
          <input
            id="colorFavorito"
            type="color"
            value={colorFavorito}
            onChange={(event) => setColorFavorito(event.target.value)}
          />
          <span>{colorFavorito}</span>
        </div>

        <button type="submit" disabled={!puedeEnviar} className="submit-button">
          Enviar registro
        </button>
      </form>

      {resumen ? (
        <section className="summary">
          <h2>Resumen de tu registro</h2>
          <div className="summary-grid">
            <div>
              <strong>Nombre:</strong>
              <p>{resumen.nombre || '-'}</p>
            </div>
            <div>
              <strong>Correo:</strong>
              <p>{resumen.email || '-'}</p>
            </div>
            <div>
              <strong>Contraseña:</strong>
              <p>{resumen.password ? '••••••••' : '-'}</p>
            </div>
            <div>
              <strong>Edad:</strong>
              <p>{resumen.edad || '-'}</p>
            </div>
            <div>
              <strong>Fecha de nacimiento:</strong>
              <p>{resumen.fechaNacimiento || '-'}</p>
            </div>
            <div>
              <strong>Experiencia:</strong>
              <p>{resumen.experiencia}</p>
            </div>
            <div>
              <strong>Modalidad:</strong>
              <p>{resumen.modalidad}</p>
            </div>
            <div>
              <strong>País:</strong>
              <p>{resumen.pais || '-'}</p>
            </div>
            <div>
              <strong>Lenguajes:</strong>
              <p>{resumen.lenguajes.length ? resumen.lenguajes.join(', ') : '-'}</p>
            </div>
            <div>
              <strong>Comentarios:</strong>
              <p>{resumen.comentarios || '-'}</p>
            </div>
            <div>
              <strong>Color favorito:</strong>
              <p>{resumen.colorFavorito}</p>
            </div>
            <div>
              <strong>Foto:</strong>
              <p>{resumen.foto}</p>
            </div>
          </div>

          {fotoPreview ? (
            <div className="photo-preview">
              <img src={fotoPreview} alt="Vista previa de perfil" />
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  )
}

export default App
