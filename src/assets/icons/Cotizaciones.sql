-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-12-2021 a las 18:07:37
-- Versión del servidor: 10.5.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u474938127_KaeserVentasDB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Cotizaciones`
--

CREATE TABLE `Cotizaciones` (
  `id` int(11) NOT NULL,
  `datosForm` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datosModelos` varchar(3000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccionArchivo` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1,
  `Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `Cotizaciones`
--

INSERT INTO `Cotizaciones` (`id`, `datosForm`, `datosModelos`, `direccionArchivo`, `estado`, `Date`) VALUES
(15, '{&quot;oportunidad&quot;:123456,&quot;oferta&quot;:1235,&quot;idCliente&quot;:522,&quot;nombreCliente&quot;:&quot;Jenner Orozco&quot;,&quot;direccion&quot;:&quot;11 calle A 10-40 zona 11 colonia Roosevelt&quot;,&quot;contacto&quot;:&quot;59469669&quot;,&quot;condicionPago&quot;:&quot;Mennsual&quot;,&quot;moneda&quot;:&quot;GTQ&quot;,&quot;porcentajeDescuento&quot;:&quot;20&quot;,&quot;correoCliente&quot;:&quot;jf.orozco3@gmail.com&quot;}', '[{&quot;id&quot;:&quot;136&quot;,&quot;idTipoEquipo&quot;:&quot;2&quot;,&quot;modelo&quot;:&quot;CSG 55-2&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;137&quot;,&quot;idTipoEquipo&quot;:&quot;2&quot;,&quot;modelo&quot;:&quot; CSG 70-2&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;338&quot;,&quot;idTipoEquipo&quot;:&quot;16&quot;,&quot;modelo&quot;:&quot;SAM 2-4&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;340&quot;,&quot;idTipoEquipo&quot;:&quot;16&quot;,&quot;modelo&quot;:&quot; SAM 2-16&quot;,&quot;cantidad&quot;:4}]', 'fileCotizaciones\\15\\sqlBiota.txt', 3, '2021-12-07 14:56:17'),
(16, '{&quot;oportunidad&quot;:123,&quot;oferta&quot;:123,&quot;idCliente&quot;:123,&quot;nombreCliente&quot;:&quot;Jenner Orozco&quot;,&quot;direccion&quot;:&quot;11 calle A 10-40 zona 11 colonia Roosevelt&quot;,&quot;contacto&quot;:&quot;59469669&quot;,&quot;condicionPago&quot;:&quot;PAGO&quot;,&quot;moneda&quot;:&quot;GTQ&quot;,&quot;porcentajeDescuento&quot;:&quot;20&quot;,&quot;correoCliente&quot;:&quot;jf.orozco3@gmail.com&quot;}', '[{&quot;id&quot;:&quot;158&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot;i.Comp 8-G&quot;,&quot;cantidad&quot;:1}]', 'fileCotizaciones\\16\\sqlBiota.txt', 2, '2021-12-07 14:56:17'),
(17, '{&quot;oportunidad&quot;:11,&quot;oferta&quot;:11,&quot;idCliente&quot;:11,&quot;nombreCliente&quot;:&quot;Jenner Orozco&quot;,&quot;direccion&quot;:&quot;11 calle A 10-40 zona 11 colonia Roosevelt&quot;,&quot;contacto&quot;:&quot;59469669&quot;,&quot;condicionPago&quot;:&quot;PAGO&quot;,&quot;moneda&quot;:&quot;GTQ&quot;,&quot;porcentajeDescuento&quot;:&quot;50&quot;,&quot;correoCliente&quot;:&quot;jf.orozco3@gmail.com&quot;}', '[{&quot;id&quot;:&quot;158&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot;i.Comp 8-G&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;159&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot; i.Comp 8 TOWER&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;160&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot; i.Comp 8 TOWER T&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;161&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot; i.Comp 9-G&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;162&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot; i.Comp 9 TOWER&quot;,&quot;cantidad&quot;:1},{&quot;id&quot;:&quot;163&quot;,&quot;idTipoEquipo&quot;:&quot;3&quot;,&quot;modelo&quot;:&quot; i.Comp 9 TOWER T&quot;,&quot;cantidad&quot;:1}]', 'fileCotizaciones\\17\\sqlBiota.txt', 2, '2021-12-07 14:56:17'),
(18, '{&quot;oportunidad&quot;:123,&quot;oferta&quot;:123,&quot;idCliente&quot;:123,&quot;nombreCliente&quot;:&quot;Jenner Orozco&quot;,&quot;direccion&quot;:&quot;11 calle A 10-40 zona 11 colonia Roosevelt&quot;,&quot;contacto&quot;:&quot;59469669&quot;,&quot;condicionPago&quot;:&quot;asd&quot;,&quot;moneda&quot;:&quot;asd&quot;,&quot;porcentajeDescuento&quot;:&quot;asd&quot;,&quot;correoCliente&quot;:&quot;jf.orozco3@gmail.com&quot;}', '[{&quot;id&quot;:&quot;341&quot;,&quot;idTipoEquipo&quot;:&quot;17&quot;,&quot;modelo&quot;:&quot;M 13&quot;,&quot;cantidad&quot;:2},{&quot;id&quot;:&quot;342&quot;,&quot;idTipoEquipo&quot;:&quot;17&quot;,&quot;modelo&quot;:&quot; M 15&quot;,&quot;cantidad&quot;:2}]', '', 1, '2021-12-07 14:56:17');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Cotizaciones`
--
ALTER TABLE `Cotizaciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Cotizaciones`
--
ALTER TABLE `Cotizaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
