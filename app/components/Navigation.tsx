// import { ShoppingCart, User } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";

interface NavigationProps {
  userName: string;
}

export function Navigation({ userName }: NavigationProps) {
  return (
    <div></div>
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("dashboard")}>
//             <ShoppingCart className="w-6 h-6 text-blue-600" />
//             <span className="text-xl text-gray-900">SnapCart</span>
//           </div>

//           {/* Navigation Links - Hidden on mobile */}
//           <div className="hidden md:flex items-center gap-8">
//             <button
//               onClick={() => onNavigate("dashboard")}
//               className={`transition-colors ${
//                 currentPage === "dashboard"
//                   ? "text-blue-600"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Dashboard
//             </button>
//             <button
//               onClick={() => onNavigate("upload")}
//               className={`transition-colors ${
//                 currentPage === "upload"
//                   ? "text-blue-600"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Upload
//             </button>
//             <button
//               onClick={() => onNavigate("profile")}
//               className={`transition-colors ${
//                 currentPage === "profile"
//                   ? "text-blue-600"
//                   : "text-gray-600 hover:text-gray-900"
//               }`}
//             >
//               Profile
//             </button>
//           </div>

//           {/* User Menu */}
//           <div className="flex items-center">
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" className="relative h-10 w-10 rounded-full">
//                   <Avatar className="h-10 w-10">
//                     <AvatarImage src="" alt={userName} />
//                     <AvatarFallback className="bg-blue-600 text-white">
//                       {userName.charAt(0).toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="end">
//                 <DropdownMenuLabel>
//                   <div className="flex flex-col space-y-1">
//                     <p>{userName}</p>
//                     <p className="text-gray-500">{userEmail}</p>
//                   </div>
//                 </DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={() => onNavigate("profile")}>
//                   Profile
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => onNavigate("dashboard")}>
//                   Dashboard
//                 </DropdownMenuItem>
//                 <DropdownMenuItem onClick={() => onNavigate("upload")}>
//                   Upload Receipt
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem onClick={onLogout} className="text-red-600">
//                   Log out
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation - Bottom tabs */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
//         <div className="flex justify-around items-center h-16">
//           <button
//             onClick={() => onNavigate("dashboard")}
//             className={`flex flex-col items-center gap-1 px-4 ${
//               currentPage === "dashboard" ? "text-blue-600" : "text-gray-600"
//             }`}
//           >
//             <User className="w-5 h-5" />
//             <span className="text-xs">Dashboard</span>
//           </button>
//           <button
//             onClick={() => onNavigate("upload")}
//             className={`flex flex-col items-center gap-1 px-4 ${
//               currentPage === "upload" ? "text-blue-600" : "text-gray-600"
//             }`}
//           >
//             <ShoppingCart className="w-5 h-5" />
//             <span className="text-xs">Upload</span>
//           </button>
//           <button
//             onClick={() => onNavigate("profile")}
//             className={`flex flex-col items-center gap-1 px-4 ${
//               currentPage === "profile" ? "text-blue-600" : "text-gray-600"
//             }`}
//           >
//             <User className="w-5 h-5" />
//             <span className="text-xs">Profile</span>
//           </button>
//         </div>
//       </div>
//     </nav>
  );
}