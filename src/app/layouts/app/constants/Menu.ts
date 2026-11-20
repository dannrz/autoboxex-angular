import { NavGroup, Roles } from "../interfaces";

const HOME_GROUP: NavGroup = {
    label: 'Inicio',
    items: [
        { icon: 'home', label: 'Home', route: '/' },
    ]
};

export const MENU_BY_ROLE: Record<string, NavGroup[]> = {
    [Roles.Admin]: [
        HOME_GROUP,
        {
            label: 'Catálogos',
            items: [
                { icon: 'book', label: 'Marca de vehículo', route: '/catalogue/brands' },
                { icon: 'gauge', label: 'Modelo de la marca', route: '/catalogue/models' },
                { icon: 'users', label: 'Proveedor', route: '/catalogue/providers' },
                { icon: 'cog', label: 'Refacción', route: '/catalogue/spare-parts' },
                { icon: 'box', label: 'Paquete', route: '/catalogue/packages' },
                { icon: 'user', label: 'Cliente', route: '/catalogue/clients' },
                { icon: 'dollar', label: 'Precio', route: '/catalogue/prices' },
                { icon: 'money-bill', label: 'Origen de recursos', route: '/catalogue/resources' },
                { icon: 'car', label: 'Verificación de vehículo', route: '/catalogue/verify-car' },
            ]
        },
        {
            label: 'Consulta',
            items: [
                { icon: 'file-import', label: 'Orden de entrada', route: '/consult/in-orders' },
                { icon: 'image', label: 'Imágenes', route: '/consult/images' },
                { icon: 'tags', label: 'Compras', route: '/consult/buy' },
                { icon: 'wrench', label: 'Refacciones', route: '/consult/parts' },
                { icon: 'briefcase', label: 'Servicios', route: '/consults/service' },
            ]
        },
        {
            label: 'Nóminas',
            items: [
                { icon: 'calendar', label: 'Periodos de nómina', route: '/nomina/periodo-nomina' },
                { icon: 'users', label: 'Personal', route: '/nomina/personal' },
                { icon: 'sync', label: 'Generación de nómina', route: '/nomina/genera-nomina' },
                { icon: 'calculator', label: 'Cálculo de nómina', route: '/nomina/calcula-nomina' },
                { icon: 'file-export', label: 'Reporte de nómina', route: '/nomina/reporte-nomina' },
                { icon: 'check', label: 'Cierre de nómina', route: '/nomina/cierre-nomina' },
            ]
        },
        {
            label: 'Procesos',
            items: [
                { icon: 'wrench', label: 'Servicio', route: '/processes/service' },
                { icon: 'arrow-right-arrow-left', label: 'Entradas y salidas', route: '/processes/entries-exits' },
                { icon: 'money-bill', label: 'Cuentas por cobrar', route: '/processes/accounts-receivable' },
                { icon: 'dollar', label: 'Registro de pagos', route: '/processes/payment-registration' },
                { icon: 'check-circle', label: 'Cierre mensual de caja', route: '/processes/monthly-close' },
                { icon: 'cog', label: 'Servicios complementarios', route: '/processes/supplementary-services' },
                { icon: 'image', label: 'Registro de imágenes', route: '/processes/image-registration' },
                { icon: 'receipt', label: 'Registro de cobros', route: '/processes/image-registration' },
                { icon: 'arrow-right-arrow-left', label: 'Otros egresos e ingresos', route: '/processes/other-income-expenses' },
                { icon: 'check', label: 'Registro diagnóstico', route: '/processes/diagnostic-registration' },
                { icon: 'file-excel', label: 'Generación de Excel', route: '/processes/excel-generation' },
                { icon: 'file-plus', label: 'Reg. sec. facturas', route: '/processes/invoice-registration' },
                { icon: 'bell', label: 'Alarma autorizaciones', route: '/processes/authorization-alarm' },
            ]
        },
        {
            label: 'Reportes',
            items: [
                { icon: 'wrench', label: 'Refacciones', route: '/reports/refactions' },
                { icon: 'arrow-right-arrow-left', label: 'Entradas / Salidas', route: '/reports/entries-exits' },
                { icon: 'box', label: 'Insumos', route: '/reports/insumos' },
                { icon: 'wallet', label: 'Presupuesto de servicios', route: '/reports/services-budget' },
                { icon: 'receipt', label: 'Prefactura', route: '/reports/prefactura' },
                { icon: 'check-circle', label: 'Órdenes de entrada cobradas', route: '/reports/entry-orders-charged' },
                { icon: 'dollar', label: 'OE cobradas por cliente', route: '/reports/entry-orders-client' },
                { icon: 'arrow-right-arrow-left', label: 'Egresos e ingresos', route: '/reports/expenses-income' },
                { icon: 'dollar', label: 'Saldo caja', route: '/reports/cash-balance' },
                { icon: 'dollar', label: 'Cuentas por pagar', route: '/reports/accounts-payable' },
                { icon: 'money-bill', label: 'Relación de cobranza', route: '/reports/collection-report' },
                { icon: 'file-import', label: 'Órdenes de entrada', route: '/reports/entry-orders' },
                { icon: 'file-check', label: 'Reporte almacen facturas', route: '/reports/invoice-storage-report' },
            ]
        },
        {
            label: 'Administrar usuarios',
            items: [
                { icon: 'user', label: 'Lista de Usuarios', route: '/users' },
                { icon: 'lock', label: 'Solicitudes de cambios de contraseña', route: '/password-requests' },
            ]
        }
    ],
    [Roles.Administrativo]: [
        HOME_GROUP,
        {
            label: 'Catálogos',
            items: [
                { icon: 'car', label: 'Marcas de vehículos', route: '/catalogue/brands' },
                { icon: 'truck', label: 'Modelos de vehículos', route: '/catalogue/models' },
                { icon: 'wrench', label: 'Refacciones', route: '/catalogue/spare-parts' },
                { icon: 'box', label: 'Paquete', route: '/catalogue/packages' },
                { icon: 'users', label: 'Cliente', route: '/catalogue/clients' },
                { icon: 'money-bill', label: 'Precio', route: '/catalogue/prices' },
            ]
        },
        {
            label: 'Consultas',
            items: [
                { icon: 'image', label: 'Imágenes', route: '/consultas/images' },
                { icon: 'shopping-bag', label: 'Compras', route: '/consultas/buys' },
                { icon: 'wrench', label: 'Refacciones', route: '/consultas/refacs' },
                { icon: 'bolt', label: 'Servicios', route: '/consults/service' },
            ]
        },
        {
            label: 'Procesos',
            items: [
                { icon: 'car', label: 'Servicio', route: '/processes/service' },
                { icon: 'dollar', label: 'Cuentas por cobrar', route: '/processes/counts' },
                { icon: 'briefcase', label: 'Servicios complementarios', route: '/processes/complementary-services' },
                { icon: 'image', label: 'Registro de imágenes', route: '/processes/image-registration' },
                { icon: 'file-edit', label: 'Registro de cobros', route: '/processes/register' },
                { icon: 'check', label: 'Registro diagnóstico', route: '/processes/diagnostic' },
                { icon: 'file-excel', label: 'Generación de Excel', route: '/processes/excel' },
                { icon: 'receipt', label: 'Facturas', route: '/processes/invoices' },
            ]
        },
        {
            label: 'Reportes',
            items: [
                { icon: 'wrench', label: 'Refacciones', route: '/reports/refactions' },
                { icon: 'arrow-right-arrow-left', label: 'Entradas / Salidas', route: '/reports/entries-exits' },
                { icon: 'box', label: 'Insumos', route: '/reports/insumos' },
                { icon: 'wallet', label: 'Presupuesto de servicios', route: '/reports/services-budget' },
                { icon: 'receipt', label: 'Prefactura', route: '/reports/prefactura' },
                { icon: 'check-circle', label: 'Órdenes de entrada cobradas', route: '/reports/entry-orders-charged' },
                { icon: 'dollar', label: 'OE cobradas por cliente', route: '/reports/entry-orders-client' },
                { icon: 'money-bill', label: 'Relación de cobranza', route: '/reports/collection-report' },
                { icon: 'file-import', label: 'Órdenes de entrada', route: '/reports/entry-orders' },
            ]
        }
    ],
    [Roles.Almacen]: [
        HOME_GROUP,
        {
            label: 'Catálogos',
            items: [
                { icon: 'users', label: 'Proveedor', route: '/catalogos/proveedores' },
                { icon: 'wrench', label: 'Refacciones', route: '/catalogos/refacciones' },
                { icon: 'box', label: 'Paquete', route: '/catalogos/packages' },
                { icon: 'dollar', label: 'Origen de recursos', route: '/catalogos/origen-recursos' },
                { icon: 'car', label: 'Verificación de autos', route: '/catalogos/verificacion-autos' },
            ]
        },
        {
            label: 'Consultas',
            items: [
                { icon: 'file-import', label: 'Ordenes de entrada', route: '/consultas/ordenes-entrada' },
                { icon: 'image', label: 'Imágenes', route: '/consultas/imagenes' },
                { icon: 'wallet', label: 'Compras', route: '/consultas/compras' },
                { icon: 'wrench', label: 'Refacciones', route: '/consultas/refacciones' },
                { icon: 'file-check', label: 'Servicios', route: '/consultas/servicios' },
            ]
        },
        {
            label: 'Nóminas',
            items: [
                { icon: 'calendar-times', label: 'Periodos de nómina', route: '/nominas/periodos-nomina' },
                { icon: 'users', label: 'Personal', route: '/nominas/personal' },
                { icon: 'pencil', label: 'Generar nómina', route: '/nominas/generar-nomina' },
                { icon: 'calculator', label: 'Calcular nómina', route: '/nominas/calcular-nomina' },
                { icon: 'file', label: 'Reporte de nómina', route: '/nominas/reporte-nomina' },
                { icon: 'times-circle', label: 'Cierre de nómina', route: '/nominas/cierre-nomina' },
            ]
        },
        {
            label: 'Procesos',
            items: [
                { icon: 'sign-in', label: 'Entradas y salidas', route: '/procesos/entradas-salidas' },
                { icon: 'sign-out', label: 'Salidas de almacén', route: '/procesos/salidas-almacen' },
                { icon: 'money-bill', label: 'Registro de pagos', route: '/procesos/registro-pagos' },
                { icon: 'check-circle', label: 'Cierre mensual de caja', route: '/procesos/cierre-mensual-caja' },
                { icon: 'image', label: 'Registro de imágenes', route: '/procesos/registro-imagenes' },
                { icon: 'money-bill', label: 'Otros ingresos y egresos', route: '/procesos/otros-ingresos-egresos' },
                { icon: 'money-bill', label: 'Registro de diagnóstico', route: '/procesos/registro-diagnostico' },
            ]
        },
        {
            label: 'Reportes',
            items: [
                { icon: 'wrench', label: 'Refacciones', route: '/reports/refactions' },
                { icon: 'arrow-right-arrow-left', label: 'Entradas/Salidas', route: '/reports/entries-exits' },
                { icon: 'shop', label: 'Insumos OE', route: '/reports/insumos' },
                { icon: 'dollar', label: 'Saldo caja', route: '/reports/cash-balance' },
                { icon: 'file-check', label: 'Cuentas por pagar', route: '/reports/accounts-payable' },
                { icon: 'file', label: 'Reporte almacen facturas', route: '/reportes/reporte-almacen-facturas' },
            ]
        }
    ]
};
