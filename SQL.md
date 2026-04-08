CREATE TABLE institucion (
    cod_ie INT(5) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (cod_ie)
) ENGINE = InnoDB;

-cod_ie INT: número identificador único. Se usa INT porque es eficiente para claves numéricas y permite un rango amplio.
-nombre VARCHAR(100): nombre de la institución, longitud variable (no siempre ocupa lo mismo), por eso VARCHAR.
  
CREATE TABLE docente (
    documento_id BIGINT NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    titulo VARCHAR(100) NULL,
    direccion VARCHAR(150) NOT NULL,
    cod_ie_de_trabajo INT(5) NOT NULL,
    PRIMARY KEY (documento_id),
    FOREIGN KEY (cod_ie_de_trabajo) 
        REFERENCES institucion(cod_ie)
) ENGINE = InnoDB;

-documento_id BIGINT: documentos pueden ser muy largos (cédula, pasaporte), por eso se usa BIGINT.
-nombre VARCHAR(150): nombres completos pueden ser extensos.
-titulo VARCHAR(100): títulos académicos (ej: "Magíster en Educación"), longitud variable.
-direccion VARCHAR(150): direcciones suelen ser largas y variables.
-cod_ie_de_trabajo INT: clave foránea, debe coincidir con el tipo de institucion.

CREATE TABLE modulo (
    cod_modulo INT(5) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    doc_docente BIGINT NOT NULL,
    PRIMARY KEY (cod_modulo),
    FOREIGN KEY (doc_docente) 
        REFERENCES docente(documento_id)
) ENGINE = InnoDB;

-cod_modulo INT: identificador numérico simple.
-nombre VARCHAR(100): nombre del módulo (variable).
-doc_docente BIGINT: referencia al docente, debe coincidir con su tipo.

CREATE TABLE tema (
    cod_tema INT(5) NOT NULL,
    descripcion_tema VARCHAR(200) NOT NULL,
    doc_docente BIGINT NOT NULL,
    PRIMARY KEY (cod_tema),
    FOREIGN KEY (doc_docente) 
        REFERENCES docente(documento_id)
) ENGINE = InnoDB;

-cod_tema INT: identificador del tema.
-descripcion_tema VARCHAR(200): descripción puede ser más larga.
-doc_docente BIGINT: relación con docente.

CREATE TABLE alumno (
    num_expediente INT(10) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    tutor VARCHAR(100) NULL,
    PRIMARY KEY (num_expediente)
) ENGINE = InnoDB;

-num_expediente INT: identificador del alumno.
-nombre VARCHAR(100) y apellido VARCHAR(100): datos variables.
-fecha_nacimiento DATE: tipo adecuado para fechas (permite cálculos).
-tutor VARCHAR(100): nombre del tutor, opcional (NULL).

CREATE TABLE cursa (
    num_expediente INT(10) NOT NULL,
    cod_modulo INT(5) NOT NULL,
    fecha_inicio DATE NOT NULL,
    PRIMARY KEY (num_expediente, cod_modulo),
    FOREIGN KEY (num_expediente) 
        REFERENCES alumno(num_expediente),
    FOREIGN KEY (cod_modulo) 
        REFERENCES modulo(cod_modulo)
) ENGINE = InnoDB;

-num_expediente INT: referencia al alumno.
-cod_modulo INT: referencia al módulo.
-fecha_inicio DATE: importante para saber cuándo inicia el curso.
-Clave primaria compuesta: evita que un alumno se registre dos veces en el mismo módulo.
