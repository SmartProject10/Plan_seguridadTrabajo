-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-11-2023 a las 01:25:48
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `administradores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comite`
--

CREATE TABLE `comite` (
  `id` int(4) NOT NULL,
  `dni` int(8) NOT NULL,
  `nombres` varchar(150) NOT NULL,
  `representacion` varchar(80) NOT NULL,
  `cargo` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comite`
--

INSERT INTO `comite` (`id`, `dni`, `nombres`, `representacion`, `cargo`) VALUES
(1, 82727312, 'Mario Lopéz Dominguez', 'Representante del empleador', 'Miembro Titular-Presidente'),
(2, 98382812, 'Tipula Bautista Vidal', 'Representante del trabajador', 'Miembro Titular-Secretario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especifico`
--

CREATE TABLE `especifico` (
  `id_objespecifico` int(2) NOT NULL,
  `objespecifico` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especifico`
--

INSERT INTO `especifico` (`id_objespecifico`, `objespecifico`) VALUES
(1, 'Verificar el grado de de cumplimiento de los líderes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `general`
--

CREATE TABLE `general` (
  `id_objgeneral` varchar(7) NOT NULL,
  `objgeneral` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `general`
--

INSERT INTO `general` (`id_objgeneral`, `objgeneral`) VALUES
('E01', 'Liderazgo y compromiso'),
('E02', 'Objetivos escolares 45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud_especifico`
--

CREATE TABLE `salud_especifico` (
  `id_saludespecifico` int(11) NOT NULL,
  `salud_objespecifico` varchar(170) DEFAULT NULL,
  `meta` varchar(6) NOT NULL,
  `indicador` varchar(70) NOT NULL,
  `formula` varchar(170) DEFAULT NULL,
  `frecuencia` varchar(20) NOT NULL,
  `responsable` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salud_especifico`
--

INSERT INTO `salud_especifico` (`id_saludespecifico`, `salud_objespecifico`, `meta`, `indicador`, `formula`, `frecuencia`, `responsable`) VALUES
(0, 'Ejecutar las  Capacitaciones en Seguridad y Salud en el Trabajo', '90%', 'Porcentaje de capacitaciones brindadas', 'No. de actividades ejecutadas /No. total de actividades programadas *100 %', 'Semestral', 'Área SIG'),
(0, 'Ejecutar los simulacros programados', '90%', 'Porcentaje de simulacros ejecutados', 'No. de simulacros ejecutados /No. total de simulacros programados *100%', 'Trimestral', 'Área SIG'),
(0, 'Realizar inspecciones de seguridad y salud en el trabajo a las áreas de trabajo', '100%', 'Porcentaje de inspecciones ejecutadas', 'No. Inspecciones ejecutadas / No. Inspecciones programadas * 100%', 'Anual', 'Área SIG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salud_general`
--

CREATE TABLE `salud_general` (
  `id_saludgeneral` int(11) NOT NULL,
  `salud_objgeneral` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salud_general`
--

INSERT INTO `salud_general` (`id_saludgeneral`, `salud_objgeneral`) VALUES
(0, 'Ortogar Protección y seguridad  y salud de todos los colaboradores de Alteriza, mediante la prevención de lesiones,dolencias, enfermedades e incidentes relacionados con el trabajo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subobjetivoespecifico`
--

CREATE TABLE `subobjetivoespecifico` (
  `id_subobjespecifico` decimal(5,2) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `responsable` varchar(100) NOT NULL,
  `area` varchar(50) NOT NULL,
  `enero` varchar(2) NOT NULL,
  `febrero` varchar(2) NOT NULL,
  `marzo` varchar(2) NOT NULL,
  `abril` varchar(2) NOT NULL,
  `mayo` varchar(2) NOT NULL,
  `junio` varchar(2) NOT NULL,
  `julio` varchar(2) NOT NULL,
  `agosto` varchar(2) NOT NULL,
  `septiembre` varchar(2) NOT NULL,
  `octubre` varchar(2) NOT NULL,
  `noviembre` varchar(2) NOT NULL,
  `diciembre` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subobjetivoespecifico`
--

INSERT INTO `subobjetivoespecifico` (`id_subobjespecifico`, `descripcion`, `responsable`, `area`, `enero`, `febrero`, `marzo`, `abril`, `mayo`, `junio`, `julio`, `agosto`, `septiembre`, `octubre`, `noviembre`, `diciembre`) VALUES
(1.20, 'Organizar comités de seguridad y salud en el trabajo', 'Presidente del comité/Jefe Sig/Jefe SSOMA', 'Administración', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'),
(2.10, 'Revisar y actualizar la Matriz IPERC', 'Jefe Sig/Jefe SSOMA', 'SIG', '', 'P', '', '', '', '', '', '', '', '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comite`
--
ALTER TABLE `comite`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id_objgeneral`);

--
-- Indices de la tabla `salud_general`
--
ALTER TABLE `salud_general`
  ADD PRIMARY KEY (`id_saludgeneral`);

--
-- Indices de la tabla `subobjetivoespecifico`
--
ALTER TABLE `subobjetivoespecifico`
  ADD PRIMARY KEY (`id_subobjespecifico`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
