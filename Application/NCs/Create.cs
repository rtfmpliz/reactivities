using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.NCs
{
    public class Create
    {
        public class Command : IRequest
        {
        public Guid Id { get; set; }
        #nullable enable
        public string? NCStatement { get; set; }

        public string? RequirementClauseNo { get; set; }
        public string? RequirementDoc { get; set; }
        public string? ObjEvidence { get; set; }
        public string? Justify { get; set; }
        public string? DocReference { get; set; }
        public DateTime? DocRevDate { get; set; }
        public int? DocRevNo { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var nc =  new NC
                {
                    Id = request.Id,
                    NCStatement = request.NCStatement,
                    RequirementClauseNo = request.RequirementClauseNo,
                    RequirementDoc = request.RequirementDoc,
                    ObjEvidence = request.ObjEvidence,
                    Justify = request.Justify,
                    DocRevDate = request.DocRevDate,
                    DocRevNo = request.DocRevNo,
                    DocReference = request.DocReference
                };

                _context.NCs.Add(nc);
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
                    
                
            }
        }
    }
}