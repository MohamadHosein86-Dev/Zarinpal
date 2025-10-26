"use client";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";
import { dashboardData } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/helpfunc";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { Badge, CheckCircle, Clock, Download, Eye, Filter, MoreHorizontal, Table, XCircle } from "lucide-react";

const getStatusBadge = (status: string) => {
  switch (status) {
    case "موفق":
      return <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 cursor-pointer">موفق</Badge>;
    case "ناموفق":
      return <Badge className="bg-red-100 text-red-800 border-red-200 cursor-pointer">ناموفق</Badge>;
    case "در انتظار":
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200 cursor-pointer">در انتظار</Badge>;
    default:
      return <Badge className="cursor-pointer">{status}</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "موفق":
      return <CheckCircle className="w-4 h-4 text-emerald-600" />;
    case "ناموفق":
      return <XCircle className="w-4 h-4 text-red-600" />;
    case "در انتظار":
      return <Clock className="w-4 h-4 text-amber-600" />;
    default:
      return null;
  }
};
export default function RecentTransactionsTable() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
      <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">تراکنش‌های اخیر</CardTitle>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="cursor-pointer hover:bg-slate-50 bg-transparent">
                  <Filter className="h-4 w-4 ml-2" />
                  فیلتر
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="cursor-pointer hover:bg-slate-50 bg-transparent">
                  <Download className="h-4 w-4 ml-2" />
                  خروجی
                </Button>
              </motion.div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-slate-50/50 text-right">
                  <TableHead className="font-bold text-right">شناسه</TableHead>
                  <TableHead className="font-bold text-right">مشتری</TableHead>
                  <TableHead className="font-bold text-right">مبلغ</TableHead>
                  <TableHead className="font-bold text-right">وضعیت</TableHead>
                  <TableHead className="font-bold text-right">تاریخ</TableHead>
                  <TableHead className="font-bold text-right">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dashboardData.recentTransactions.map((transaction, index) => (
                  <motion.tr key={transaction.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className="hover:bg-slate-50/50 transition-colors cursor-pointer">
                    <TableCell className="font-medium text-blue-600">#{transaction.id}</TableCell>
                    <TableCell className="font-medium">{transaction.customer}</TableCell>
                    <TableCell className="font-bold text-slate-700">{formatCurrency(transaction.amount)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(transaction.status)}
                        {getStatusBadge(transaction.status)}
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">{transaction.date}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </motion.div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="cursor-pointer">
                            <Eye className="ml-2 h-4 w-4" />
                            مشاهده جزئیات
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Download className="ml-2 h-4 w-4" />
                            دانلود رسید
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
